/*
 * This script fetches all color styles from a Figma document.
 *
 * Dependencies:
 *
 *  - node-fetch
 *
 *
 * For now, you need to input the page ID, as well as the file keys.
 * The page ID is visible in the JSON
 * payload when you call /files 🤷‍♂️
 */
// Inspect the /files JSON response, or the URL of the Figma page:
// https://www.figma.com/file/<file key>/Some-Name?node-id=<encoded page ID, like '183%3A0 = 183:0'>

require('dotenv').config();
const PAGE_ID = '0:1';
// Get this from the URL of a single file:
// https://www.figma.com/file/<file key>/Some-Name?node-id=182%3A0
const FILE_KEY = '38aMNOGrknPq3zLfaMq6Ya'; // 'z4l4k7wgPxaeHZFW6iIvxo'; // wkqsvO8Jr0WNiokusGudaO

const fetch = require('node-fetch');
const fs = require('fs');
const { promisify } = require('util');
const path = require('path');

const writeFile = promisify(fs.writeFile);

const personalToken = process.env.DEV_ACCESS_TOKEN;

if (!personalToken) {
  console.error('Please pass FIGMA_PERSONAL_TOKEN to this script and re-run');
  process.exit(1);
}

const figmaBase = 'https://api.figma.com/';

function rgbToHex(r, g, b) {
  const color =
    '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  if (color.length > 7) {
    return color.slice(0, 7);
  }
  return color;
}

const slugify = (str) => str.toLowerCase().replace(/\s+/, '-');

function camelize(str) {
  /*var n = str.lastIndexOf('/');
  var result = str.substring(n + 1);
  return result;*/

  str = str.replace('Primary/', '').toLowerCase();
  str = str.replace('/', ' ');

  str = str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });

  return str;
}

const doFetch = (url) =>
  fetch(`${figmaBase}v1${url}`, {
    headers: {
      'X-Figma-Token': personalToken,
    },
  })
    .then((res) => {
      if (!res.ok) {
        console.log(`${figmaBase}v1${url}`);
        throw new Error(`Status: ${res.status}`);
      }

      return res.json();
    })
    .then((json) => {
      if (json.error || (json.status && json.status !== 200)) {
        throw new Error(json.error || `Status ${json.status}: ${json.err}`);
      }

      return json;
    });

const fetchFile = async (key) => await doFetch(`/files/${key}`);

/**
 * Fetches all color styles from the Figma doc and returns an object
 * array with this shape:
 * 
 * ```json
 * {
 *   "key": "206f4e4753e2e8f2e7ac24744bd1843ac206ead1",
 *   "file_key": "bMb57SxaX0ugGmWMmi7KVzIP",
 *   "node_id": "189:85",
 *   "style_type": "FILL",
 *   "thumbnail_url": "<url>",
 *   "name": "Green 10",
 *   "description": "Desc",
 *   "created_at": "2019-02-16T16:00:39.126Z",
 *   "updated_at": "2019-02-16T16:00:39.126Z",
 *   "user": {
 *     "id": "575212366706412863",
 *     "handle": "Johan Brook",
 *     "img_url": "<url>"
 *   },
 *   "sort_position": "=O",
 *   "color": "#ebfff7"
 * }
 ```
 */
const fetchAllColorStyles = async () => {
  const file = await fetchFile(FILE_KEY);

  const styles = Object.entries(file.styles);

  const canvas = file.document.children.find((page) => page.id === PAGE_ID);

  var colorList = [];

  const runCanvas = (ca) => {
    ca.forEach((c) => {
      if (c.type === 'RECTANGLE' || c.type === 'ELLIPSE') {
        const { r, g, b } = c.fills[0].color;
        const nodeId = c.styles?.fill;

        const meta = ca[1].children.map((e) => {
          return [`${e.name}`, e.characters];
        });

        const foundStyles = styles.find(([node_id]) => node_id === nodeId);
        if (
          foundStyles &&
          foundStyles[1].name.toLowerCase().indexOf('legacy') === -1
        ) {
          colorList.push({
            // Cross reference to the array of styles, since Figma doesn't
            // give us the HEX color codes in their /styles endpoint .. :(
            ...foundStyles[1],
            meta: Object.fromEntries(meta),
            color: rgbToHex(r * 256, g * 256, b * 256),
          });
        }
      }
      if (c.children !== undefined && Array.isArray(c.children)) {
        runCanvas(c.children);
      }
    });
  };
  runCanvas(canvas.children);

  return colorList;
  return (
    canvas &&
    canvas.children
      .filter((c) => c.type === 'INSTANCE')
      .map((c) => c.children.filter((c) => c.type === 'RECTANGLE')[0])
      .filter((c) => !!c.styles && !!c.styles.fill)
      .map((c) => {
        const { r, g, b } = c.fills[0].color;
        const nodeId = c.styles.fill;

        return {
          // Cross reference to the array of styles, since Figma doesn't
          // give us the HEX color codes in their /styles endpoint .. :(
          ...styles.find((s) => s.node_id === nodeId),
          color: rgbToHex(r * 256, g * 256, b * 256),
        };
      })
      .filter((c) => !!c.name)
  );
};

/**
 * Calls Figma's API and saves to a `colors.js` file in the project root.
 */
const writeColorsFromFigma = async ({ fileName }) => {
  const styles = await fetchAllColorStyles();

  if (!styles) {
    throw new Error('No styles found');
  }

  colorMeta = {};

  styles
    .sort((a, b) => (a.sort_position < b.sort_position ? -1 : 1))
    .forEach((s) => {
      colorMeta[camelize(s.name)] = {
        description: s.description,
        ...s.meta,
        color: s.color,
        category: s.name.split('/')[0],
      };
    });

  const colors = styles
    .sort((a, b) => (a.sort_position < b.sort_position ? -1 : 1))
    .map(
      (s) =>
        (s.description ? `    /** ${s.description} */\n` : '') +
        `export const ${camelize(s.name)} = '${s.color}';`
    )
    .join('\n');

  const fileContents = `/* eslint-disable */
/* Updated at ${new Date().toUTCString()}*/


${colors}

export const meta = ${JSON.stringify(colorMeta, null, 2).replace(
    /"([^"]+)":/g,
    '$1:'
  )};
`;

  await writeFile(/*path.resolve(__dirname + */ fileName, fileContents);

  console.log(`Wrote ${styles.length} colors to colors.js`);
};

module.exports = writeColorsFromFigma;

//writeColorsFromFigma().catch(console.error);
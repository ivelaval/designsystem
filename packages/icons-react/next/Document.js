/**
 * Copyright IBM Corp. 2016, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Code generated by @carbon/icon-build-helpers. DO NOT EDIT.
 */
'use strict';

var iconPropTypes = require('./iconPropTypes-ca0c5320.js');
var React = require('react');
require('@carbon/icon-helpers');
require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _g;

var _excluded = ["children", "size"];
var Document = /*#__PURE__*/React__default['default'].forwardRef(function Document(_ref, ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      rest = iconPropTypes._objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 16",
    fill: "currentColor"
  }, rest), _g || (_g = /*#__PURE__*/React__default['default'].createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10.5813895,3.99560309 L8.01441679,1.42863035 L8.04015101,3.98773525 L10.5813895,3.99560309 Z M7.01005595,1 L1,1 L1,15 L11,15 L11,4.99690393 L8.03705496,4.98773046 C7.48990191,4.98603644 7.04570346,4.5449187 7.04020157,3.99779069 L7.01005595,1 Z M1,0 L8,0 L12,4 L12,15 C12,15.5522847 11.5522847,16 11,16 L1,16 C0.44771525,16 0,15.5522847 0,15 L0,1 C0,0.44771525 0.44771525,0 1,0 Z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3 9H9V10H3zM3 12H9V13H3z"
  }))), children);
});
Document.propTypes = iconPropTypes.iconPropTypes;

module.exports = Document;
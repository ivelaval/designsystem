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

var _path, _path2;

var _excluded = ["children", "size"];
var VisibilityOn = /*#__PURE__*/React__default['default'].forwardRef(function VisibilityOn(_ref, ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      rest = iconPropTypes._objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default['default'].createElement(iconPropTypes.Icon, iconPropTypes._objectSpread2({
    width: size,
    height: size,
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 11",
    fill: "currentColor"
  }, rest), _path || (_path = /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8,7.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S6.9,7.5,8,7.5z M8,8.5c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3 S9.7,8.5,8,8.5z"
  })), _path2 || (_path2 = /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8,10c2.8,0,5.1-1.5,6.9-4.6C13.1,2.5,10.8,1,8,1c-2.8,0-5,1.4-6.8,4.4C2.9,8.6,5.2,10,8,10z M8,0 c3.3,0,6,1.8,8.1,5.4C14,9.2,11.3,11,8,11S2,9.2,0,5.5C2,1.9,4.6,0,8,0z"
  })), children);
});
VisibilityOn.propTypes = iconPropTypes.iconPropTypes;

module.exports = VisibilityOn;
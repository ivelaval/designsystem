"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar;
exports.SidebarHeader = SidebarHeader;
exports.SidebarContentHeader = SidebarContentHeader;
exports.SidebarContentBody = SidebarContentBody;
exports.SidebarScroll = SidebarScroll;
exports.SidebarBackButton = SidebarBackButton;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("@wfp/icons");

var _settings = _interopRequireDefault(require("../../globals/js/settings"));

var _excluded = ["active", "children", "className", "sidebarMobileHeader", "sidebar"],
    _excluded2 = ["className", "children", "noPadding"],
    _excluded3 = ["className", "children", "noPadding"],
    _excluded4 = ["className", "children", "noPadding"],
    _excluded5 = ["children"],
    _excluded6 = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _settings.default.prefix;

function Sidebar(_ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      sidebarMobileHeader = _ref.sidebarMobileHeader,
      sidebar = _ref.sidebar,
      other = _objectWithoutProperties(_ref, _excluded);

  var classes = (0, _classnames.default)("".concat(prefix, "--sidebar-content__container"), className, _defineProperty({}, "".concat(prefix, "--sidebar-content__container--active"), active));
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, other), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--sidebar-item-content")
  }, sidebar), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "--content-section")
  }, children));
}

Sidebar.propTypes = {
  /**
   The children of content area
  */
  children: _propTypes.default.node,

  /**
   The `active` prop show the content section when an item is clicked. It's useful in mobile view 
  */
  active: _propTypes.default.bool,

  /**
   The Sidebar is usually where the sidebar items will be. 
   `<SidebarHeader/>` can be called in `Sidebar` and example search can be used in here
  */
  Sidebar: _propTypes.default.node,

  /**
     The sidebarMobileHeader is shwon when view is in mobile version. 
     `<SidebarBackButton/>` can used in the `sidebarMobileHeader` prop
  */
  sidebarMobileHeader: _propTypes.default.node
};

function SidebarHeader(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      noPadding = _ref2.noPadding,
      other = _objectWithoutProperties(_ref2, _excluded2);

  var classes = (0, _classnames.default)("".concat(prefix, "--sidebar-content__header"), className, _defineProperty({}, "".concat(prefix, "--sidebar-content__header--no-padding"), noPadding));
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, other), children);
}

SidebarHeader.propTypes = {
  /**
   The children of header of content area
  */
  children: _propTypes.default.node,

  /**
   Disable the default padding of the SidebarHeader
  */
  noPadding: _propTypes.default.bool
};

function SidebarContentHeader(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      noPadding = _ref3.noPadding,
      other = _objectWithoutProperties(_ref3, _excluded3);

  var classes = (0, _classnames.default)("".concat(prefix, "--sidebar-content-mobile-header"), className, {});
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, other), children);
}

SidebarContentHeader.propTypes = {
  /**
   The children of header of content area
  */
  children: _propTypes.default.node
};

function SidebarContentBody(_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      noPadding = _ref4.noPadding,
      other = _objectWithoutProperties(_ref4, _excluded4);

  var classes = (0, _classnames.default)("".concat(prefix, "--sidebar-content__children"), className, {});
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    id: "scroll-container",
    className: classes
  }, other), children);
}

SidebarContentBody.propTypes = {
  /**
   The children of header of content area
  */
  children: _propTypes.default.node
};

function SidebarScroll(_ref5) {
  var children = _ref5.children,
      other = _objectWithoutProperties(_ref5, _excluded5);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "".concat(prefix, "--sidebar-content__scroll")
  }, other), children);
}

SidebarScroll.propTypes = {
  /**
  children will be sidebar items beneath the header. `SidebarScroll` wraps around the children to keep them scrolling while the header content is fixed
  */
  children: _propTypes.default.node
};

function SidebarBackButton(_ref6) {
  var children = _ref6.children,
      other = _objectWithoutProperties(_ref6, _excluded6);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "".concat(prefix, "--sidebar-content__back-button")
  }, other), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: _icons.iconChevronLeft
  }), children);
}

SidebarBackButton.propTypes = {
  /**
   The children of back button of content area
  */
  children: _propTypes.default.node
};
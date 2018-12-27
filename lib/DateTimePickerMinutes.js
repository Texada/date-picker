"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Constants = _interopRequireDefault(require("./Constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderSwitchButton = function renderSwitchButton(props) {
  return props.mode === _Constants.default.MODE_TIME ? _react.default.createElement("ul", {
    className: "list-unstyled"
  }, _react.default.createElement("li", null, _react.default.createElement("span", {
    className: "btn picker-switch",
    onClick: props.onSwitch,
    style: {
      width: "100%"
    }
  }, _react.default.createElement("span", {
    className: "glyphicon glyphicon-time"
  })))) : null;
};

var DateTimePickerMinutes = function DateTimePickerMinutes(props) {
  return _react.default.createElement("div", {
    className: "timepicker-minutes",
    "data-action": "selectMinute",
    style: {
      display: "block"
    }
  }, renderSwitchButton(props), _react.default.createElement("table", {
    className: "table-condensed"
  }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", {
    className: "minute",
    onClick: props.setSelectedMinute
  }, "00"), _react.default.createElement("td", {
    className: "minute",
    onClick: props.setSelectedMinute
  }, "05"), _react.default.createElement("td", {
    className: "minute",
    onClick: props.setSelectedMinute
  }, "10"), _react.default.createElement("td", {
    className: "minute",
    onClick: props.setSelectedMinute
  }, "15")), _react.default.createElement("tr", null, _react.default.createElement("td", {
    className: "minute",
    onClick: props.setSelectedMinute
  }, "20"), _react.default.createElement("td", {
    className: "minute",
    onClick: props.setSelectedMinute
  }, "25"), _react.default.createElement("td", {
    className: "minute",
    onClick: props.setSelectedMinute
  }, "30"), _react.default.createElement("td", {
    className: "minute",
    onClick: props.setSelectedMinute
  }, "35")), _react.default.createElement("tr", null, _react.default.createElement("td", {
    className: "minute",
    onClick: props.setSelectedMinute
  }, "40"), _react.default.createElement("td", {
    className: "minute",
    onClick: props.setSelectedMinute
  }, "45"), _react.default.createElement("td", {
    className: "minute",
    onClick: props.setSelectedMinute
  }, "50"), _react.default.createElement("td", {
    className: "minute",
    onClick: props.setSelectedMinute
  }, "55")))));
};

DateTimePickerMinutes.propTypes = {
  setSelectedMinute: _propTypes.default.func.isRequired,
  onSwitch: _propTypes.default.func.isRequired,
  mode: _propTypes.default.string.isRequired
};
var _default = DateTimePickerMinutes;
exports.default = _default;
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

var DateTimePickerHours = function DateTimePickerHours(props) {
  var setSelectedHour = props.setSelectedHour;
  return _react.default.createElement("div", {
    className: "timepicker-hours",
    "data-action": "selectHour",
    style: {
      display: "block"
    }
  }, renderSwitchButton(props), _react.default.createElement("table", {
    className: "table-condensed"
  }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "01"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "02"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "03"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "04")), _react.default.createElement("tr", null, _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "05"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "06"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "07"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "08")), _react.default.createElement("tr", null, _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "09"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "10"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "11"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "12")), _react.default.createElement("tr", null, _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "13"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "14"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "15"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "16")), _react.default.createElement("tr", null, _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "17"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "18"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "19"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "20")), _react.default.createElement("tr", null, _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "21"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "22"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "23"), _react.default.createElement("td", {
    className: "hour",
    onClick: setSelectedHour
  }, "24")))));
};

DateTimePickerHours.propTypes = {
  setSelectedHour: _propTypes.default.func.isRequired,
  onSwitch: _propTypes.default.func.isRequired,
  mode: _propTypes.default.string.isRequired
};
var _default = DateTimePickerHours;
exports.default = _default;
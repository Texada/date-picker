"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DateTimePickerDate = _interopRequireDefault(require("./DateTimePickerDate.js"));

var _DateTimePickerTime = _interopRequireDefault(require("./DateTimePickerTime.js"));

var _Constants = _interopRequireDefault(require("./Constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderDatePicker = function renderDatePicker(props) {
  if (props.showDatePicker) {
    return _react.default.createElement("li", null, _react.default.createElement(_DateTimePickerDate.default, {
      addDecade: props.addDecade,
      addMonth: props.addMonth,
      addYear: props.addYear,
      daysOfWeekDisabled: props.daysOfWeekDisabled,
      maxDate: props.maxDate,
      minDate: props.minDate,
      selectedDate: props.selectedDate,
      setSelectedDate: props.setSelectedDate,
      setViewMonth: props.setViewMonth,
      setViewYear: props.setViewYear,
      showToday: props.showToday,
      subtractDecade: props.subtractDecade,
      subtractMonth: props.subtractMonth,
      subtractYear: props.subtractYear,
      viewDate: props.viewDate,
      viewMode: props.viewMode
    }));
  }
};

var renderTimePicker = function renderTimePicker(props) {
  if (props.showTimePicker) {
    return _react.default.createElement("li", null, _react.default.createElement(_DateTimePickerTime.default, {
      addHour: props.addHour,
      addMinute: props.addMinute,
      mode: props.mode,
      selectedDate: props.selectedDate,
      setSelectedHour: props.setSelectedHour,
      setSelectedMinute: props.setSelectedMinute,
      subtractHour: props.subtractHour,
      subtractMinute: props.subtractMinute,
      togglePeriod: props.togglePeriod,
      viewDate: props.viewDate
    }));
  }
};

var renderSwitchButton = function renderSwitchButton(props) {
  return props.mode === _Constants.default.MODE_DATETIME ? _react.default.createElement("li", null, _react.default.createElement("span", {
    className: "btn picker-switch",
    onClick: props.togglePicker,
    style: {
      width: "100%"
    }
  }, _react.default.createElement("span", {
    className: (0, _classnames.default)("glyphicon", props.showTimePicker ? "glyphicon-calendar" : "glyphicon-time")
  }))) : null;
};

var DateTimePicker = function DateTimePicker(props) {
  return (0, _reactDom.createPortal)(_react.default.createElement("div", {
    className: (0, _classnames.default)(props.widgetClasses),
    style: props.widgetStyle
  }, _react.default.createElement("ul", {
    className: "list-unstyled"
  }, renderDatePicker(props), renderSwitchButton(props), renderTimePicker(props))), document.querySelector("body"));
};

DateTimePicker.propTypes = {
  showDatePicker: _propTypes.default.bool,
  showTimePicker: _propTypes.default.bool,
  subtractMonth: _propTypes.default.func.isRequired,
  addMonth: _propTypes.default.func.isRequired,
  viewDate: _propTypes.default.object.isRequired,
  selectedDate: _propTypes.default.object.isRequired,
  showToday: _propTypes.default.bool,
  viewMode: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  mode: _propTypes.default.oneOf([_Constants.default.MODE_DATE, _Constants.default.MODE_DATETIME, _Constants.default.MODE_TIME]),
  daysOfWeekDisabled: _propTypes.default.array,
  setSelectedDate: _propTypes.default.func.isRequired,
  subtractYear: _propTypes.default.func.isRequired,
  addYear: _propTypes.default.func.isRequired,
  setViewMonth: _propTypes.default.func.isRequired,
  setViewYear: _propTypes.default.func.isRequired,
  subtractHour: _propTypes.default.func.isRequired,
  addHour: _propTypes.default.func.isRequired,
  subtractMinute: _propTypes.default.func.isRequired,
  addMinute: _propTypes.default.func.isRequired,
  addDecade: _propTypes.default.func.isRequired,
  subtractDecade: _propTypes.default.func.isRequired,
  togglePeriod: _propTypes.default.func.isRequired,
  minDate: _propTypes.default.object,
  maxDate: _propTypes.default.object,
  widgetClasses: _propTypes.default.object,
  widgetStyle: _propTypes.default.object,
  togglePicker: _propTypes.default.func,
  setSelectedHour: _propTypes.default.func,
  setSelectedMinute: _propTypes.default.func
};
var _default = DateTimePicker;
exports.default = _default;
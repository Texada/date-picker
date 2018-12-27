"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderDays = function renderDays(props) {
  var year = props.viewDate.year();
  var month = props.viewDate.month();
  var prevMonth = props.viewDate.clone().subtract(1, "months");
  var days = prevMonth.daysInMonth();
  prevMonth.date(days).startOf("week");
  var nextMonth = (0, _moment.default)(prevMonth).clone().add(42, "d");
  var minDate = props.minDate ? props.minDate.clone().subtract(1, "days") : props.minDate;
  var maxDate = props.maxDate ? props.maxDate.clone() : props.maxDate;
  var html = [];
  var cells = [];
  var classes;

  while (prevMonth.isBefore(nextMonth)) {
    classes = "day";
    var prevMonthYear = prevMonth.year();

    if (prevMonthYear < year || prevMonthYear === year && prevMonth.month() < month) {
      classes += " old";
    } else if (prevMonthYear > year || prevMonthYear === year && prevMonth.month() > month) {
      classes += " new";
    }

    if (prevMonth.isSame((0, _moment.default)({
      y: props.selectedDate.year(),
      M: props.selectedDate.month(),
      d: props.selectedDate.date()
    }))) {
      classes += " active";
    }

    if (props.showToday) {
      if (prevMonth.isSame((0, _moment.default)(), "day")) {
        classes += " today";
      }
    }

    if (minDate && prevMonth.isBefore(minDate) || maxDate && prevMonth.isAfter(maxDate)) {
      classes += " disabled";
    }

    if (props.daysOfWeekDisabled.length > 0 && props.daysOfWeekDisabled.indexOf(prevMonth.day()) !== -1) {
      classes += " disabled";
    }

    cells.push(_react.default.createElement("td", {
      className: classes,
      key: prevMonth.month() + "-" + prevMonth.date(),
      onClick: props.setSelectedDate
    }, prevMonth.date()));

    if (prevMonth.weekday() === (0, _moment.default)().endOf("week").weekday()) {
      html.push(_react.default.createElement("tr", {
        key: prevMonth.month() + "-" + prevMonth.date()
      }, cells));
      cells = [];
    }

    prevMonth.add(1, "d");
  }

  return html;
};

var DateTimePickerDays = function DateTimePickerDays(props) {
  return _react.default.createElement("div", {
    className: "datepicker-days",
    style: {
      display: "block"
    }
  }, _react.default.createElement("table", {
    className: "table-condensed"
  }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", {
    className: "prev",
    onClick: props.subtractMonth
  }, _react.default.createElement("span", {
    className: "glyphicon glyphicon-chevron-left"
  })), _react.default.createElement("th", {
    className: "switch",
    colSpan: "5",
    onClick: props.showMonths
  }, _moment.default.months()[props.viewDate.month()], " ", props.viewDate.year()), _react.default.createElement("th", {
    className: "next",
    onClick: props.addMonth
  }, _react.default.createElement("span", {
    className: "glyphicon glyphicon-chevron-right"
  }))), _react.default.createElement("tr", null, _react.default.createElement("th", {
    className: "dow"
  }, "Su"), _react.default.createElement("th", {
    className: "dow"
  }, "Mo"), _react.default.createElement("th", {
    className: "dow"
  }, "Tu"), _react.default.createElement("th", {
    className: "dow"
  }, "We"), _react.default.createElement("th", {
    className: "dow"
  }, "Th"), _react.default.createElement("th", {
    className: "dow"
  }, "Fr"), _react.default.createElement("th", {
    className: "dow"
  }, "Sa"))), _react.default.createElement("tbody", null, renderDays(props))));
};

DateTimePickerDays.propTypes = {
  subtractMonth: _propTypes.default.func.isRequired,
  addMonth: _propTypes.default.func.isRequired,
  viewDate: _propTypes.default.object.isRequired,
  selectedDate: _propTypes.default.object.isRequired,
  showToday: _propTypes.default.bool,
  daysOfWeekDisabled: _propTypes.default.array,
  setSelectedDate: _propTypes.default.func.isRequired,
  showMonths: _propTypes.default.func.isRequired,
  minDate: _propTypes.default.object,
  maxDate: _propTypes.default.object
};
DateTimePickerDays.defaultProps = {
  showToday: true
};
var _default = DateTimePickerDays;
exports.default = _default;
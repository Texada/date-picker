"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderMonths = function renderMonths(props) {
  var month = props.selectedDate.month();

  var monthsShort = _moment.default.monthsShort();

  var months = [];

  for (var i = 0; i < 12; i++) {
    var classes = {
      month: true,
      active: i === month && props.viewDate.year() === props.selectedDate.year()
    };
    months.push(_react.default.createElement("span", {
      className: (0, _classnames.default)(classes),
      key: i,
      onClick: props.setViewMonth
    }, monthsShort[i]));
  }

  return months;
};

var DateTimePickerMonths = function DateTimePickerMonths(props) {
  return _react.default.createElement("div", {
    className: "datepicker-months",
    style: {
      display: "block"
    }
  }, _react.default.createElement("table", {
    className: "table-condensed"
  }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", {
    className: "prev",
    onClick: props.subtractYear
  }, _react.default.createElement("span", {
    className: "glyphicon glyphicon-chevron-left"
  })), _react.default.createElement("th", {
    className: "switch",
    colSpan: "5",
    onClick: props.showYears
  }, props.viewDate.year()), _react.default.createElement("th", {
    className: "next",
    onClick: props.addYear
  }, _react.default.createElement("span", {
    className: "glyphicon glyphicon-chevron-right"
  })))), _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", {
    colSpan: "7"
  }, renderMonths(props))))));
};

DateTimePickerMonths.propTypes = {
  subtractYear: _propTypes.default.func.isRequired,
  addYear: _propTypes.default.func.isRequired,
  viewDate: _propTypes.default.object.isRequired,
  selectedDate: _propTypes.default.object.isRequired,
  showYears: _propTypes.default.func.isRequired,
  setViewMonth: _propTypes.default.func.isRequired
};
var _default = DateTimePickerMonths;
exports.default = _default;
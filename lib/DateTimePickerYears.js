"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderYears = function renderYears(props) {
  var years = [];
  var year = parseInt(props.viewDate.year() / 10, 10) * 10;
  year--;
  var selectedYear = props.selectedDate.year();

  for (var i = -1; i < 11; i++) {
    var classes = {
      year: true,
      old: i === -1 || i === 10,
      active: selectedYear === year
    };
    years.push(_react.default.createElement("span", {
      className: (0, _classnames.default)(classes),
      key: year,
      onClick: props.setViewYear
    }, year));
    year++;
  }

  return years;
};

var DateTimePickerYears = function DateTimePickerYears(props) {
  var year = parseInt(props.viewDate.year() / 10, 10) * 10;
  return _react.default.createElement("div", {
    className: "datepicker-years",
    style: {
      display: "block"
    }
  }, _react.default.createElement("table", {
    className: "table-condensed"
  }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", {
    className: "prev",
    onClick: props.subtractDecade
  }, _react.default.createElement("span", {
    className: "glyphicon glyphicon-chevron-left"
  })), _react.default.createElement("th", {
    className: "switch",
    colSpan: "5"
  }, year, " - ", year + 9), _react.default.createElement("th", {
    className: "next",
    onClick: props.addDecade
  }, _react.default.createElement("span", {
    className: "glyphicon glyphicon-chevron-right"
  })))), _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", {
    colSpan: "7"
  }, renderYears(props))))));
};

DateTimePickerYears.propTypes = {
  subtractDecade: _propTypes.default.func.isRequired,
  addDecade: _propTypes.default.func.isRequired,
  viewDate: _propTypes.default.object.isRequired,
  selectedDate: _propTypes.default.object.isRequired,
  setViewYear: _propTypes.default.func.isRequired
};
var _default = DateTimePickerYears;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DateTimePickerDays =
/*#__PURE__*/
function (_Component) {
  _inherits(DateTimePickerDays, _Component);

  function DateTimePickerDays() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateTimePickerDays);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateTimePickerDays)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderDays", function () {
      var year = _this.props.viewDate.year();

      var month = _this.props.viewDate.month();

      var prevMonth = _this.props.viewDate.clone().subtract(1, "months");

      var days = prevMonth.daysInMonth();
      prevMonth.date(days).startOf("week");
      var nextMonth = (0, _moment.default)(prevMonth).clone().add(42, "d");
      var minDate = _this.props.minDate ? _this.props.minDate.clone().subtract(1, "days") : _this.props.minDate;
      var maxDate = _this.props.maxDate ? _this.props.maxDate.clone() : _this.props.maxDate;
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
          y: _this.props.selectedDate.year(),
          M: _this.props.selectedDate.month(),
          d: _this.props.selectedDate.date()
        }))) {
          classes += " active";
        }

        if (_this.props.showToday) {
          if (prevMonth.isSame((0, _moment.default)(), "day")) {
            classes += " today";
          }
        }

        if (minDate && prevMonth.isBefore(minDate) || maxDate && prevMonth.isAfter(maxDate)) {
          classes += " disabled";
        }

        if (_this.props.daysOfWeekDisabled.length > 0 && _this.props.daysOfWeekDisabled.indexOf(prevMonth.day()) !== -1) {
          classes += " disabled";
        }

        cells.push(_react.default.createElement("td", {
          className: classes,
          key: prevMonth.month() + "-" + prevMonth.date(),
          onClick: _this.props.setSelectedDate
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
    });

    return _this;
  }

  _createClass(DateTimePickerDays, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "datepicker-days",
        style: {
          display: "block"
        }
      }, _react.default.createElement("table", {
        className: "table-condensed"
      }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", {
        className: "prev",
        onClick: this.props.subtractMonth
      }, _react.default.createElement("span", {
        className: "glyphicon glyphicon-chevron-left"
      })), _react.default.createElement("th", {
        className: "switch",
        colSpan: "5",
        onClick: this.props.showMonths
      }, _moment.default.months()[this.props.viewDate.month()], " ", this.props.viewDate.year()), _react.default.createElement("th", {
        className: "next",
        onClick: this.props.addMonth
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
      }, "Sa"))), _react.default.createElement("tbody", null, this.renderDays())));
    }
  }]);

  return DateTimePickerDays;
}(_react.Component);

DateTimePickerDays.defaultProps = {
  showToday: true
};
var _default = DateTimePickerDays;
exports.default = _default;
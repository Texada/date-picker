"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _classnames = _interopRequireDefault(require("classnames"));

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

var DateTimePickerYears =
/*#__PURE__*/
function (_Component) {
  _inherits(DateTimePickerYears, _Component);

  function DateTimePickerYears() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateTimePickerYears);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateTimePickerYears)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderYears", function () {
      var classes, i, year, years;
      years = [];
      year = parseInt(_this.props.viewDate.year() / 10, 10) * 10;
      year--;
      i = -1;

      while (i < 11) {
        classes = {
          year: true,
          old: i === -1 | i === 10,
          active: _this.props.selectedDate.year() === year
        };
        years.push(_react.default.createElement("span", {
          className: (0, _classnames.default)(classes),
          key: year,
          onClick: _this.props.setViewYear
        }, year));
        year++;
        i++;
      }

      return years;
    });

    return _this;
  }

  _createClass(DateTimePickerYears, [{
    key: "render",
    value: function render() {
      var year;
      year = parseInt(this.props.viewDate.year() / 10, 10) * 10;
      return _react.default.createElement("div", {
        className: "datepicker-years",
        style: {
          display: "block"
        }
      }, _react.default.createElement("table", {
        className: "table-condensed"
      }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", {
        className: "prev",
        onClick: this.props.subtractDecade
      }, "\u2039"), _react.default.createElement("th", {
        className: "switch",
        colSpan: "5"
      }, year, " - ", year + 9), _react.default.createElement("th", {
        className: "next",
        onClick: this.props.addDecade
      }, "\u203A"))), _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", {
        colSpan: "7"
      }, this.renderYears())))));
    }
  }]);

  return DateTimePickerYears;
}(_react.Component);

DateTimePickerYears.propTypes = {
  subtractDecade: _propTypes.PropTypes.func.isRequired,
  addDecade: _propTypes.PropTypes.func.isRequired,
  viewDate: _propTypes.PropTypes.object.isRequired,
  selectedDate: _propTypes.PropTypes.object.isRequired,
  setViewYear: _propTypes.PropTypes.func.isRequired
};
var _default = DateTimePickerYears;
exports.default = _default;
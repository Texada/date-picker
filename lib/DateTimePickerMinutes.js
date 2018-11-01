"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _Constants = _interopRequireDefault(require("./Constants.js"));

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

var DateTimePickerMinutes =
/*#__PURE__*/
function (_Component) {
  _inherits(DateTimePickerMinutes, _Component);

  function DateTimePickerMinutes() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateTimePickerMinutes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateTimePickerMinutes)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderSwitchButton", function () {
      return _this.props.mode === _Constants.default.MODE_TIME ? _react.default.createElement("ul", {
        className: "list-unstyled"
      }, _react.default.createElement("li", null, _react.default.createElement("span", {
        className: "btn picker-switch",
        onClick: _this.props.onSwitch,
        style: {
          width: "100%"
        }
      }, _react.default.createElement("span", {
        className: "glyphicon glyphicon-time"
      })))) : null;
    });

    return _this;
  }

  _createClass(DateTimePickerMinutes, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "timepicker-minutes",
        "data-action": "selectMinute",
        style: {
          display: "block"
        }
      }, this.renderSwitchButton(), _react.default.createElement("table", {
        className: "table-condensed"
      }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", {
        className: "minute",
        onClick: this.props.setSelectedMinute
      }, "00"), _react.default.createElement("td", {
        className: "minute",
        onClick: this.props.setSelectedMinute
      }, "05"), _react.default.createElement("td", {
        className: "minute",
        onClick: this.props.setSelectedMinute
      }, "10"), _react.default.createElement("td", {
        className: "minute",
        onClick: this.props.setSelectedMinute
      }, "15")), _react.default.createElement("tr", null, _react.default.createElement("td", {
        className: "minute",
        onClick: this.props.setSelectedMinute
      }, "20"), _react.default.createElement("td", {
        className: "minute",
        onClick: this.props.setSelectedMinute
      }, "25"), _react.default.createElement("td", {
        className: "minute",
        onClick: this.props.setSelectedMinute
      }, "30"), _react.default.createElement("td", {
        className: "minute",
        onClick: this.props.setSelectedMinute
      }, "35")), _react.default.createElement("tr", null, _react.default.createElement("td", {
        className: "minute",
        onClick: this.props.setSelectedMinute
      }, "40"), _react.default.createElement("td", {
        className: "minute",
        onClick: this.props.setSelectedMinute
      }, "45"), _react.default.createElement("td", {
        className: "minute",
        onClick: this.props.setSelectedMinute
      }, "50"), _react.default.createElement("td", {
        className: "minute",
        onClick: this.props.setSelectedMinute
      }, "55")))));
    }
  }]);

  return DateTimePickerMinutes;
}(_react.Component);

DateTimePickerMinutes.propTypes = {
  setSelectedMinute: _propTypes.PropTypes.func.isRequired,
  onSwitch: _propTypes.PropTypes.func.isRequired,
  mode: _propTypes.PropTypes.string.isRequired
};
var _default = DateTimePickerMinutes;
exports.default = _default;
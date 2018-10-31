"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimePickerTime = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _DateTimePickerMinutes = _interopRequireDefault(require("./DateTimePickerMinutes"));

var _DateTimePickerHours = _interopRequireDefault(require("./DateTimePickerHours"));

var _Constants = _interopRequireDefault(require("./Constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DateTimePickerTime =
/*#__PURE__*/
function (_Component) {
  _inherits(DateTimePickerTime, _Component);

  function DateTimePickerTime() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateTimePickerTime);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateTimePickerTime)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      minutesDisplayed: false,
      hoursDisplayed: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "goBack", function () {
      return _this.setState({
        minutesDisplayed: false,
        hoursDisplayed: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showMinutes", function () {
      return _this.setState({
        minutesDisplayed: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showHours", function () {
      return _this.setState({
        hoursDisplayed: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderMinutes", function () {
      if (_this.state.minutesDisplayed) {
        return _react.default.createElement(_DateTimePickerMinutes.default, _extends({}, _this.props, {
          onSwitch: _this.goBack
        }));
      } else {
        return null;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderHours", function () {
      if (_this.state.hoursDisplayed) {
        return _react.default.createElement(_DateTimePickerHours.default, _extends({}, _this.props, {
          onSwitch: _this.goBack
        }));
      } else {
        return null;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderPicker", function () {
      if (!_this.state.minutesDisplayed && !_this.state.hoursDisplayed) {
        return _react.default.createElement("div", {
          className: "timepicker-picker"
        }, _react.default.createElement("table", {
          className: "table-condensed"
        }, _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement("a", {
          className: "btn",
          onClick: _this.props.addHour
        }, _react.default.createElement("span", {
          className: "glyphicon glyphicon-chevron-up"
        }))), _react.default.createElement("td", {
          className: "separator"
        }), _react.default.createElement("td", null, _react.default.createElement("a", {
          className: "btn",
          onClick: _this.props.addMinute
        }, _react.default.createElement("span", {
          className: "glyphicon glyphicon-chevron-up"
        }))), _react.default.createElement("td", {
          className: "separator"
        })), _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement("span", {
          className: "timepicker-hour",
          onClick: _this.showHours
        }, _this.props.selectedDate.format("h"))), _react.default.createElement("td", {
          className: "separator"
        }, ":"), _react.default.createElement("td", null, _react.default.createElement("span", {
          className: "timepicker-minute",
          onClick: _this.showMinutes
        }, _this.props.selectedDate.format("mm"))), _react.default.createElement("td", {
          className: "separator"
        }), _react.default.createElement("td", null, _react.default.createElement("button", {
          className: "btn btn-primary",
          onClick: _this.props.togglePeriod,
          type: "button"
        }, _this.props.selectedDate.format("A")))), _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement("a", {
          className: "btn",
          onClick: _this.props.subtractHour
        }, _react.default.createElement("span", {
          className: "glyphicon glyphicon-chevron-down"
        }))), _react.default.createElement("td", {
          className: "separator"
        }), _react.default.createElement("td", null, _react.default.createElement("a", {
          className: "btn",
          onClick: _this.props.subtractMinute
        }, _react.default.createElement("span", {
          className: "glyphicon glyphicon-chevron-down"
        }))), _react.default.createElement("td", {
          className: "separator"
        })))));
      } else {
        return "";
      }
    });

    return _this;
  }

  _createClass(DateTimePickerTime, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "timepicker"
      }, this.renderPicker(), this.renderHours(), this.renderMinutes());
    }
  }]);

  return DateTimePickerTime;
}(_react.Component);

exports.DateTimePickerTime = DateTimePickerTime;
DateTimePickerTime.propTypes = {
  setSelectedHour: _propTypes.PropTypes.func.isRequired,
  setSelectedMinute: _propTypes.PropTypes.func.isRequired,
  subtractHour: _propTypes.PropTypes.func.isRequired,
  addHour: _propTypes.PropTypes.func.isRequired,
  subtractMinute: _propTypes.PropTypes.func.isRequired,
  addMinute: _propTypes.PropTypes.func.isRequired,
  viewDate: _propTypes.PropTypes.object.isRequired,
  selectedDate: _propTypes.PropTypes.object.isRequired,
  togglePeriod: _propTypes.PropTypes.func.isRequired,
  mode: _propTypes.PropTypes.oneOf([_Constants.default.MODE_DATE, _Constants.default.MODE_DATETIME, _Constants.default.MODE_TIME])
};
var _default = DateTimePickerTime;
exports.default = _default;
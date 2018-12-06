"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DateTimePicker = _interopRequireDefault(require("./DateTimePicker.js"));

var _Constants = _interopRequireDefault(require("./Constants.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WIDGET_WIDTH = 266;
var WIDGET_HEIGHT = 292;

var DateTimeField =
/*#__PURE__*/
function (_Component) {
  _inherits(DateTimeField, _Component);

  function DateTimeField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateTimeField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateTimeField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resolvePropsInputFormat", function () {
      if (_this.props.inputFormat) {
        return _this.props.inputFormat;
      }

      switch (_this.props.mode) {
        case _Constants.default.MODE_TIME:
          return "h:mm A";

        case _Constants.default.MODE_DATE:
          return "MM/DD/YY";

        default:
          return "MM/DD/YY h:mm A";
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showDatePicker: _this.props.mode !== _Constants.default.MODE_TIME,
      showTimePicker: _this.props.mode === _Constants.default.MODE_TIME,
      inputFormat: _this.resolvePropsInputFormat(),
      buttonIcon: _this.props.mode === _Constants.default.MODE_TIME ? "glyphicon-time" : "glyphicon-calendar",
      widgetStyle: {
        display: "block",
        position: "absolute",
        left: -9999,
        zIndex: _this.props.zIndex + 1
      },
      viewDate: (_this.props.dateTime === "" ? (0, _moment.default)(undefined, undefined, true) : (0, _moment.default)(_this.props.dateTime, _this.props.format, true)).startOf("month"),
      selectedDate: _this.props.dateTime === "" ? (0, _moment.default)(undefined, undefined, true) : (0, _moment.default)(_this.props.dateTime, _this.props.format, true),
      inputValue: typeof _this.props.defaultText !== "undefined" ? _this.props.defaultText : (0, _moment.default)(_this.props.dateTime, _this.props.format, true).format(_this.resolvePropsInputFormat())
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidUpdate", function (prevProps) {
      var didChange = false;
      var state = {};

      if (_this.props.inputFormat !== prevProps.inputFormat) {
        didChange = true;
        state.inputFormat = _this.props.inputFormat;
        state.inputValue = (0, _moment.default)(_this.props.dateTime, _this.props.format, true).format(_this.props.inputFormat);
      }

      if (_this.props.dateTime !== prevProps.dateTime && (0, _moment.default)(_this.props.dateTime, _this.props.format, true).isValid()) {
        didChange = true;
        state.viewDate = (0, _moment.default)(_this.props.dateTime, _this.props.format, true).startOf("month");
        state.selectedDate = (0, _moment.default)(_this.props.dateTime, _this.props.format, true);
        state.inputValue = (0, _moment.default)(_this.props.dateTime, _this.props.format, true).format(_this.props.inputFormat ? _this.props.inputFormat : _this.state.inputFormat);
      }

      if (didChange) {
        _this.setState(state);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      var value = event.target == null ? event : event.target.value;

      if ((0, _moment.default)(value, _this.state.inputFormat, true).isValid()) {
        _this.setState({
          selectedDate: (0, _moment.default)(value, _this.state.inputFormat, true),
          viewDate: (0, _moment.default)(value, _this.state.inputFormat, true).startOf("month")
        });
      }

      _this.setState({
        inputValue: value
      }, function () {
        return this.props.onChange((0, _moment.default)(this.state.inputValue, this.state.inputFormat, true).format(this.props.format), value);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getValue", function () {
      return (0, _moment.default)(_this.state.inputValue, _this.props.inputFormat, true).format(_this.props.format);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setSelectedDate", function (e) {
      var target = e.target;

      if (target.className && !target.className.match(/disabled/g)) {
        var month;
        if (target.className.indexOf("new") >= 0) month = _this.state.viewDate.month() + 1;else if (target.className.indexOf("old") >= 0) month = _this.state.viewDate.month() - 1;else month = _this.state.viewDate.month();

        _this.setState({
          selectedDate: _this.state.viewDate.clone().month(month).date(parseInt(e.target.innerHTML)).hour(_this.state.selectedDate.hours()).minute(_this.state.selectedDate.minutes())
        }, function () {
          this.closePicker();
          this.props.onChange(this.state.selectedDate.format(this.props.format));
          this.setState({
            inputValue: this.state.selectedDate.format(this.state.inputFormat)
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setSelectedHour", function (e) {
      _this.setState({
        selectedDate: _this.state.selectedDate.clone().hour(parseInt(e.target.innerHTML)).minute(_this.state.selectedDate.minutes())
      }, function () {
        this.closePicker();
        this.props.onChange(this.state.selectedDate.format(this.props.format));
        this.setState({
          inputValue: this.state.selectedDate.format(this.state.inputFormat)
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setSelectedMinute", function (e) {
      _this.setState({
        selectedDate: _this.state.selectedDate.clone().hour(_this.state.selectedDate.hours()).minute(parseInt(e.target.innerHTML))
      }, function () {
        this.closePicker();
        this.props.onChange(this.state.selectedDate.format(this.props.format));
        this.setState({
          inputValue: this.state.selectedDate.format(this.state.inputFormat)
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setViewMonth", function (month) {
      _this.setState({
        viewDate: _this.state.viewDate.clone().month(month)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setViewYear", function (year) {
      _this.setState({
        viewDate: _this.state.viewDate.clone().year(year)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addMinute", function () {
      _this.setState({
        selectedDate: _this.state.selectedDate.clone().add(1, "minutes")
      }, function () {
        this.props.onChange(this.state.selectedDate.format(this.props.format));
        this.setState({
          inputValue: this.state.selectedDate.format(this.resolvePropsInputFormat())
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addHour", function () {
      _this.setState({
        selectedDate: _this.state.selectedDate.clone().add(1, "hours")
      }, function () {
        this.props.onChange(this.state.selectedDate.format(this.props.format));
        this.setState({
          inputValue: this.state.selectedDate.format(this.resolvePropsInputFormat())
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addMonth", function () {
      _this.setState({
        viewDate: _this.state.viewDate.add(1, "months")
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addYear", function () {
      _this.setState({
        viewDate: _this.state.viewDate.add(1, "years")
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addDecade", function () {
      _this.setState({
        viewDate: _this.state.viewDate.add(10, "years")
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "subtractMinute", function () {
      _this.setState({
        selectedDate: _this.state.selectedDate.clone().subtract(1, "minutes")
      }, function () {
        _this.props.onChange(_this.state.selectedDate.format(_this.props.format));

        _this.setState({
          inputValue: _this.state.selectedDate.format(_this.resolvePropsInputFormat())
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "subtractHour", function () {
      _this.setState({
        selectedDate: _this.state.selectedDate.clone().subtract(1, "hours")
      }, function () {
        _this.props.onChange(_this.state.selectedDate.format(_this.props.format));

        _this.setState({
          inputValue: _this.state.selectedDate.format(_this.resolvePropsInputFormat())
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "subtractMonth", function () {
      _this.setState({
        viewDate: _this.state.viewDate.subtract(1, "months")
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "subtractYear", function () {
      _this.setState({
        viewDate: _this.state.viewDate.subtract(1, "years")
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "subtractDecade", function () {
      _this.setState({
        viewDate: _this.state.viewDate.subtract(10, "years")
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "togglePeriod", function () {
      if (_this.state.selectedDate.hour() > 12) {
        return _this.onChange(_this.state.selectedDate.clone().subtract(12, "hours").format(_this.state.inputFormat));
      } else {
        return _this.onChange(_this.state.selectedDate.clone().add(12, "hours").format(_this.state.inputFormat));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "togglePicker", function () {
      _this.setState({
        showDatePicker: !_this.state.showDatePicker,
        showTimePicker: !_this.state.showTimePicker
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function () {
      if (_this.state.showPicker) {
        return _this.closePicker();
      }

      _this.setState({
        showPicker: true
      });

      var calendarButtonClientRect = _this.openCalendarButtonRef.getBoundingClientRect();

      var classes = {
        "bootstrap-datetimepicker-widget": true,
        "dropdown-menu": true
      };
      var offset = {
        top: calendarButtonClientRect.top + window.pageYOffset - document.documentElement.clientTop,
        left: calendarButtonClientRect.left + window.pageXOffset - document.documentElement.clientLeft
      };
      offset.top = offset.top + _this.datetimepickerRef.offsetHeight; // if widget would appear off-screen adjust the offset to keep it on-screen

      if (window.innerWidth < offset.left) {
        var offscreen = calendarButtonClientRect.left + WIDGET_WIDTH - window.innerWidth;
        var screenPadding = Math.min(window.innerWidth * 0.05, 30);
        offset.left -= offscreen + screenPadding;
      } else {
        offset.left -= WIDGET_WIDTH - 40;
      }

      if (window.innerHeight < calendarButtonClientRect.bottom + WIDGET_HEIGHT) {
        var _offscreen = calendarButtonClientRect.bottom + WIDGET_HEIGHT - window.innerHeight;

        var _screenPadding = Math.min(window.innerHeight * 0.02, 15);

        offset.top -= _offscreen + _screenPadding;
      }

      var styles = _objectSpread({}, _this.state.widgetStyle, {
        display: "block",
        position: "absolute",
        top: offset.top,
        left: offset.left
      });

      _this.setState({
        widgetStyle: styles,
        widgetClasses: classes
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closePicker", function () {
      var style = _objectSpread({}, _this.state.widgetStyle);

      style.left = -9999;
      style.display = "none";

      _this.setState({
        showPicker: false,
        widgetStyle: style
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "size", function () {
      switch (_this.props.size) {
        case _Constants.default.SIZE_SMALL:
          return "form-group-sm";

        case _Constants.default.SIZE_LARGE:
          return "form-group-lg";

        default:
          return "";
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderOverlay", function () {
      var styles = {
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: "".concat(_this.props.zIndex)
      };

      if (_this.state.showPicker) {
        return (0, _reactDom.createPortal)(_react.default.createElement("div", {
          className: "bootstrap-datetimepicker-overlay",
          onClick: _this.closePicker,
          style: styles
        }), document.querySelector("body"));
      } else {
        return _react.default.createElement("span", null);
      }
    });

    return _this;
  }

  _createClass(DateTimeField, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_react.default.Fragment, null, this.renderOverlay(), _react.default.createElement(_DateTimePicker.default, {
        addDecade: this.addDecade,
        addHour: this.addHour,
        addMinute: this.addMinute,
        addMonth: this.addMonth,
        addYear: this.addYear,
        daysOfWeekDisabled: this.props.daysOfWeekDisabled,
        maxDate: this.props.maxDate,
        minDate: this.props.minDate,
        mode: this.props.mode,
        ref: function ref(widgetRef) {
          return _this2.widgetRef = widgetRef;
        },
        selectedDate: this.state.selectedDate,
        setSelectedDate: this.setSelectedDate,
        setSelectedHour: this.setSelectedHour,
        setSelectedMinute: this.setSelectedMinute,
        setViewMonth: this.setViewMonth,
        setViewYear: this.setViewYear,
        showDatePicker: this.state.showDatePicker,
        showTimePicker: this.state.showTimePicker,
        showToday: this.props.showToday,
        subtractDecade: this.subtractDecade,
        subtractHour: this.subtractHour,
        subtractMinute: this.subtractMinute,
        subtractMonth: this.subtractMonth,
        subtractYear: this.subtractYear,
        togglePeriod: this.togglePeriod,
        togglePicker: this.togglePicker,
        viewDate: this.state.viewDate,
        viewMode: this.props.viewMode,
        widgetClasses: this.state.widgetClasses,
        widgetStyle: this.state.widgetStyle
      }), _react.default.createElement("div", {
        className: "input-group date " + this.size(),
        ref: function ref(datetimepickerRef) {
          return _this2.datetimepickerRef = datetimepickerRef;
        }
      }, _react.default.createElement("input", _extends({
        className: "form-control",
        onChange: this.onChange,
        type: "text",
        value: this.state.inputValue
      }, this.props.inputProps, {
        disabled: this.props.disabled
      })), _react.default.createElement("span", {
        className: "input-group-addon btn-open-calendar ".concat(this.props.disabled ? "disabled" : ""),
        onClick: this.props.disabled ? function () {} : this.onClick,
        ref: function ref(openCalendarButtonRef) {
          return _this2.openCalendarButtonRef = openCalendarButtonRef;
        },
        disabled: this.props.disabled
      }, _react.default.createElement("span", {
        className: (0, _classnames.default)("glyphicon", this.state.buttonIcon)
      }))));
    }
  }]);

  return DateTimeField;
}(_react.Component);

DateTimeField.defaultProps = {
  dateTime: (0, _moment.default)().format("x"),
  format: "x",
  showToday: true,
  viewMode: "days",
  daysOfWeekDisabled: [],
  size: _Constants.default.SIZE_MEDIUM,
  mode: _Constants.default.MODE_DATETIME,
  zIndex: 4000,
  onChange: function onChange() {},
  disabled: false
};
DateTimeField.propTypes = {
  /** Represents the inital dateTime, this string is then parsed by moment.js */
  dateTime: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /** Callback trigger when the date changes. x is the new datetime value. */
  onChange: _propTypes.default.func,

  /** Defines the format moment.js should use to parse and output the date to onChange */
  format: _propTypes.default.string,

  /** Defines additional attributes for the input element of the component. */
  inputProps: _propTypes.default.object,

  /** Defines the way the date is represented in the HTML input. It must be a format understanable by moment.js */
  inputFormat: _propTypes.default.string,

  /** Sets the initial value. Could be an empty string, or helper text. */
  defaultText: _propTypes.default.string,

  /** Allows to selectively display only the time picker ('time') or the date picker ('date') */
  mode: _propTypes.default.oneOf([_Constants.default.MODE_DATE, _Constants.default.MODE_DATETIME, _Constants.default.MODE_TIME]),

  /** The earliest date allowed for entry in the calendar view. */
  minDate: _propTypes.default.object,

  /** The latest date allowed for entry in the calendar view. */
  maxDate: _propTypes.default.object,
  direction: _propTypes.default.oneOf(["up", "bottom", "auto", undefined]),

  /** Highlights today's date */
  showToday: _propTypes.default.bool,

  /** The default view to display when the picker is shown. ('years', 'months', 'days') */
  viewMode: _propTypes.default.oneOf(["days", "months", "years", "date"]),

  /** Defines the z-index of the modal overlay */
  zIndex: _propTypes.default.number,

  /** Changes the size of the date picker input field. Sizes: "sm", "md", "lg" */
  size: _propTypes.default.oneOf([_Constants.default.SIZE_SMALL, _Constants.default.SIZE_MEDIUM, _Constants.default.SIZE_LARGE]),

  /** Disables clicking on some days. Goes from 0 (Sunday) to 6 (Saturday). */
  daysOfWeekDisabled: _propTypes.default.arrayOf(_propTypes.default.number),

  /** Disables the date picker */
  disabled: _propTypes.default.bool
};
var _default = DateTimeField;
exports.default = _default;
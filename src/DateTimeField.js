import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import moment from "moment";
import DateTimePicker from "./DateTimePicker.js";
import Constants from "./Constants.js";
import CalendarIcon from "./icons/calendar.svg";
import TimeIcon from "./icons/time.svg";
import generateId from "./generateId.js";

const WIDGET_WIDTH = 266;
const WIDGET_HEIGHT = 292;

const getViewDate = props => {
  let date = moment(props.dateTime, props.format, true);
  if (!date.isValid()) date = moment(undefined, undefined, true);

  return date.startOf("month");
};

class DateTimeField extends Component {
  autoId = generateId();

  get id() {
    return this.props.id || `date-time-field-${this.autoId}`;
  }

  resolvePropsInputFormat = () => {
    if (this.props.inputFormat) {
      return this.props.inputFormat;
    }
    switch (this.props.mode) {
      case Constants.MODE_TIME:
        return "h:mm A";
      case Constants.MODE_DATE:
        return "MM/DD/YY";
      default:
        return "MM/DD/YY h:mm A";
    }
  };

  state = {
    showPicker: false,
    showDatePicker: this.props.mode !== Constants.MODE_TIME,
    showTimePicker: this.props.mode === Constants.MODE_TIME,
    inputFormat: this.resolvePropsInputFormat(),
    buttonIcon: this.props.mode === Constants.MODE_TIME ? "time" : "calendar",
    widgetStyle: {
      display: "none",
      zIndex: this.props.zIndex + 1
    },
    viewDate: getViewDate(this.props),
    selectedDate:
      this.props.dateTime === ""
        ? moment(undefined, undefined, true)
        : moment(this.props.dateTime, this.props.format, true),
    inputValue:
      typeof this.props.defaultText !== "undefined"
        ? this.props.defaultText
        : moment(this.props.dateTime, this.props.format, true).format(
            this.resolvePropsInputFormat()
          ),
    isInvalid: false,
    touched: false,
    hasFocus: false
  };

  componentDidUpdate = prevProps => {
    let didChange = false;
    let state = {};
    if (this.props.inputFormat !== prevProps.inputFormat) {
      didChange = true;
      state.inputFormat = this.props.inputFormat;
      state.inputValue = moment(
        this.props.dateTime,
        this.props.format,
        true
      ).format(this.props.inputFormat);
    }

    if (this.props.dateTime !== prevProps.dateTime) {
      didChange = true;

      if (moment(this.props.dateTime, this.props.format, true).isValid()) {
        state.isInvalid = false;
        state.viewDate = moment(
          this.props.dateTime,
          this.props.format,
          true
        ).startOf("month");
        state.selectedDate = moment(
          this.props.dateTime,
          this.props.format,
          true
        );
        state.inputValue = moment(
          this.props.dateTime,
          this.props.format,
          true
        ).format(
          this.props.inputFormat
            ? this.props.inputFormat
            : this.state.inputFormat
        );
      } else {
        state.isInvalid = true;
      }
    }

    if (didChange) {
      this.setState(state);
    }
  };

  onChange = event => {
    const value = event.target == null ? event : event.target.value;
    if (moment(value, this.state.inputFormat, true).isValid()) {
      this.setState({
        selectedDate: moment(value, this.state.inputFormat, true),
        viewDate: moment(value, this.state.inputFormat, true).startOf("month"),
        isInvalid: false
      });
    } else {
      this.setState({
        isInvalid: true
      });
    }

    this.setState(
      {
        inputValue: value
      },
      function() {
        return this.props.onChange(
          moment(this.state.inputValue, this.state.inputFormat, true).format(
            this.props.format
          ),
          value
        );
      }
    );
  };

  getValue = () => {
    return moment(this.state.inputValue, this.props.inputFormat, true).format(
      this.props.format
    );
  };

  setSelectedDate = e => {
    const { target } = e;
    if (target.className && !target.className.match(/disabled/g)) {
      let month;
      if (target.className.indexOf("new") >= 0)
        month = this.state.viewDate.month() + 1;
      else if (target.className.indexOf("old") >= 0)
        month = this.state.viewDate.month() - 1;
      else month = this.state.viewDate.month();
      this.setState(
        {
          selectedDate: this.state.viewDate
            .clone()
            .month(month)
            .date(parseInt(e.target.innerHTML))
            .hour(this.state.selectedDate.hours())
            .minute(this.state.selectedDate.minutes())
        },
        function() {
          this.closePicker();

          const changedDate = this.state.selectedDate;
          this.props.onChange(
            changedDate.format(this.props.format),
            changedDate.format(this.state.inputFormat)
          );
          this.setState({
            inputValue: changedDate.format(this.state.inputFormat)
          });
        }
      );
    }
  };

  setSelectedHour = e => {
    this.setState(
      {
        selectedDate: this.state.selectedDate
          .clone()
          .hour(parseInt(e.target.innerHTML))
          .minute(this.state.selectedDate.minutes())
      },
      function() {
        this.closePicker();

        const changedDate = this.state.selectedDate;
        this.props.onChange(
          changedDate.format(this.props.format),
          changedDate.format(this.state.inputFormat)
        );
        this.setState({
          inputValue: changedDate.format(this.state.inputFormat)
        });
      }
    );
  };

  setSelectedMinute = e => {
    this.setState(
      {
        selectedDate: this.state.selectedDate
          .clone()
          .hour(this.state.selectedDate.hours())
          .minute(parseInt(e.target.innerHTML))
      },
      function() {
        this.closePicker();

        const changedDate = this.state.selectedDate;
        this.props.onChange(
          changedDate.format(this.props.format),
          changedDate.format(this.state.inputFormat)
        );
        this.setState({
          inputValue: changedDate.format(this.state.inputFormat)
        });
      }
    );
  };

  setViewMonth = month => {
    this.setState({
      viewDate: this.state.viewDate.clone().month(month)
    });
  };

  setViewYear = year => {
    this.setState({
      viewDate: this.state.viewDate.clone().year(year)
    });
  };

  addMinute = () => {
    this.setState(
      {
        selectedDate: this.state.selectedDate.clone().add(1, "minutes")
      },
      function() {
        const changedDate = this.state.selectedDate;
        this.props.onChange(
          changedDate.format(this.props.format),
          changedDate.format(this.state.inputFormat)
        );
        this.setState({
          inputValue: changedDate.format(this.resolvePropsInputFormat())
        });
      }
    );
  };

  addHour = () => {
    this.setState(
      {
        selectedDate: this.state.selectedDate.clone().add(1, "hours")
      },
      function() {
        const changedDate = this.state.selectedDate;
        this.props.onChange(
          changedDate.format(this.props.format),
          changedDate.format(this.state.inputFormat)
        );
        this.setState({
          inputValue: changedDate.format(this.resolvePropsInputFormat())
        });
      }
    );
  };

  addMonth = () => {
    this.setState({
      viewDate: this.state.viewDate.add(1, "months")
    });
  };

  addYear = () => {
    this.setState({
      viewDate: this.state.viewDate.add(1, "years")
    });
  };

  addDecade = () => {
    this.setState({
      viewDate: this.state.viewDate.add(10, "years")
    });
  };

  subtractMinute = () => {
    this.setState(
      {
        selectedDate: this.state.selectedDate.clone().subtract(1, "minutes")
      },
      () => {
        const changedDate = this.state.selectedDate;
        this.props.onChange(
          changedDate.format(this.props.format),
          changedDate.format(this.state.inputFormat)
        );
        this.setState({
          inputValue: changedDate.format(this.resolvePropsInputFormat())
        });
      }
    );
  };

  subtractHour = () => {
    this.setState(
      {
        selectedDate: this.state.selectedDate.clone().subtract(1, "hours")
      },
      () => {
        const changedDate = this.state.selectedDate;
        this.props.onChange(
          changedDate.format(this.props.format),
          changedDate.format(this.state.inputFormat)
        );
        this.setState({
          inputValue: changedDate.format(this.resolvePropsInputFormat())
        });
      }
    );
  };

  subtractMonth = () => {
    this.setState({
      viewDate: this.state.viewDate.subtract(1, "months")
    });
  };

  subtractYear = () => {
    this.setState({
      viewDate: this.state.viewDate.subtract(1, "years")
    });
  };

  subtractDecade = () => {
    this.setState({
      viewDate: this.state.viewDate.subtract(10, "years")
    });
  };

  togglePeriod = () => {
    if (this.state.selectedDate.hour() > 12) {
      return this.onChange(
        this.state.selectedDate
          .clone()
          .subtract(12, "hours")
          .format(this.state.inputFormat)
      );
    } else {
      return this.onChange(
        this.state.selectedDate
          .clone()
          .add(12, "hours")
          .format(this.state.inputFormat)
      );
    }
  };

  togglePicker = () => {
    this.setState({
      showDatePicker: !this.state.showDatePicker,
      showTimePicker: !this.state.showTimePicker
    });
  };

  onClick = () => {
    if (this.state.showPicker) {
      return this.closePicker();
    }

    this.setState({
      showPicker: true
    });

    let calendarButtonClientRect = this.openCalendarButtonRef.getBoundingClientRect();
    let classes = {
      "bootstrap-datetimepicker-widget": true,
      "dropdown-menu": true
    };

    let offset = {
      top:
        calendarButtonClientRect.top +
        window.pageYOffset -
        document.documentElement.clientTop,
      left:
        calendarButtonClientRect.left +
        window.pageXOffset -
        document.documentElement.clientLeft
    };
    offset.top = offset.top + this.datetimepickerRef.offsetHeight;

    // if widget would appear off-screen adjust the offset to keep it on-screen
    if (window.innerWidth < offset.left) {
      const offscreen =
        calendarButtonClientRect.left + WIDGET_WIDTH - window.innerWidth;
      const screenPadding = Math.min(window.innerWidth * 0.05, 30);
      offset.left -= offscreen + screenPadding;
    } else {
      offset.left -= WIDGET_WIDTH - 40;
    }

    if (window.innerHeight < calendarButtonClientRect.bottom + WIDGET_HEIGHT) {
      const offscreen =
        calendarButtonClientRect.bottom + WIDGET_HEIGHT - window.innerHeight;
      const screenPadding = Math.min(window.innerHeight * 0.02, 15);
      offset.top -= offscreen + screenPadding;
    }

    const styles = {
      ...this.state.widgetStyle,
      display: "block",
      position: "absolute",
      top: offset.top,
      left: offset.left
    };

    this.setState({
      widgetStyle: styles,
      widgetClasses: classes
    });
  };

  closePicker = () => {
    let style = { ...this.state.widgetStyle };
    style.display = "none";
    this.setState({
      showPicker: false,
      showTimePicker: false,
      showDatePicker: true,
      widgetStyle: style,
      viewDate: getViewDate(this.props)
    });
  };

  size = () => {
    switch (this.props.size) {
      case Constants.SIZE_SMALL:
        return "form-group-sm";
      case Constants.SIZE_LARGE:
        return "form-group-lg";
      default:
        return "";
    }
  };

  renderOverlay = () => {
    const styles = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: `${this.props.zIndex}`
    };

    if (this.state.showPicker) {
      return createPortal(
        <div
          className="bootstrap-datetimepicker-overlay"
          onClick={this.closePicker}
          style={styles}
        />,
        document.querySelector("body")
      );
    } else {
      return <span />;
    }
  };

  render() {
    const isInvalid =
      this.props.shouldValidate && this.state.touched && this.state.isInvalid;

    const invalidDateMsg =
      this.props.invalidDateMsg ||
      `Date does not match format (${this.state.inputFormat})`;

    return (
      <>
        {this.props.label && (
          <label
            htmlFor={this.id}
            className={`control-label date-time-field-label ${
              this.props.required ? "required" : ""
            }`}
          >
            {this.props.label}
          </label>
        )}
        {this.renderOverlay()}
        <DateTimePicker
          showPicker={this.state.showPicker}
          addDecade={this.addDecade}
          addHour={this.addHour}
          addMinute={this.addMinute}
          addMonth={this.addMonth}
          addYear={this.addYear}
          daysOfWeekDisabled={this.props.daysOfWeekDisabled}
          maxDate={this.props.maxDate}
          minDate={this.props.minDate}
          mode={this.props.mode}
          selectedDate={this.state.selectedDate}
          setSelectedDate={this.setSelectedDate}
          setSelectedHour={this.setSelectedHour}
          setSelectedMinute={this.setSelectedMinute}
          setViewMonth={this.setViewMonth}
          setViewYear={this.setViewYear}
          showDatePicker={this.state.showDatePicker}
          showTimePicker={this.state.showTimePicker}
          showToday={this.props.showToday}
          subtractDecade={this.subtractDecade}
          subtractHour={this.subtractHour}
          subtractMinute={this.subtractMinute}
          subtractMonth={this.subtractMonth}
          subtractYear={this.subtractYear}
          togglePeriod={this.togglePeriod}
          togglePicker={this.togglePicker}
          viewDate={this.state.viewDate}
          viewMode={this.props.viewMode}
          widgetClasses={this.state.widgetClasses}
          widgetStyle={this.state.widgetStyle}
        />
        <div
          className={`input-group date ${this.size()} ${
            this.props.hasError || isInvalid ? "has-error" : ""
          } ${this.state.hasFocus ? "focus" : ""}`}
          ref={datetimepickerRef =>
            (this.datetimepickerRef = datetimepickerRef)
          }
        >
          <input
            id={this.id}
            className="form-control"
            onChange={this.onChange}
            type="text"
            value={this.state.inputValue}
            {...this.props.inputProps}
            disabled={this.props.disabled}
            readOnly={this.props.disabled || this.props.calendarOnly}
            onBlur={e => {
              if (this.props.calendarOnly) return;

              this.setState({ hasFocus: false });
              if (!this.state.touched) this.setState({ touched: true });
              if (this.props.inputProps.onBlur) this.props.inputProps.onBlur(e);
            }}
            onFocus={e => {
              if (this.props.calendarOnly) {
                this.onClick();
                return;
              }

              this.setState({ hasFocus: true });
              if (this.props.inputProps.onFocus) {
                this.props.inputProps.onFocus(e);
              }
            }}
          />
          <span
            className={`input-group-addon btn-open-calendar ${
              this.props.disabled ? "disabled" : ""
            }`}
            onClick={this.props.disabled ? () => {} : this.onClick}
            ref={openCalendarButtonRef =>
              (this.openCalendarButtonRef = openCalendarButtonRef)
            }
            disabled={this.props.disabled}
          >
            {this.state.buttonIcon === "calendar" ? (
              <CalendarIcon height={18} />
            ) : (
              <TimeIcon height={18} />
            )}
          </span>
        </div>
        {isInvalid && (
          <div
            style={{
              color: "#d75453",
              fontSize: 13,
              marginTop: 5
            }}
          >
            {invalidDateMsg}
          </div>
        )}
      </>
    );
  }
}

DateTimeField.defaultProps = {
  dateTime: moment().format("x"),
  format: "x",
  showToday: true,
  viewMode: "days",
  daysOfWeekDisabled: [],
  size: Constants.SIZE_MEDIUM,
  mode: Constants.MODE_DATETIME,
  zIndex: 4000,
  onChange: () => {},
  disabled: false,
  calendarOnly: false,
  hasError: false,
  shouldValidate: false,
  invalidDateMsg: undefined,
  required: false,
  inputProps: {},
  id: undefined
};

DateTimeField.propTypes = {
  /** Represents the inital dateTime, this string is then parsed by moment.js */
  dateTime: (props, _propName, componentName) => {
    const { dateTime } = props;
    if (
      typeof dateTime !== "string" &&
      typeof dateTime !== "number" &&
      !moment.isMoment(dateTime)
    ) {
      throw new Error(
        `Invalid prop 'dateTime' supplied to ${componentName}. 'dateTime' must be a string, number or a moment object.`
      );
    }
  },
  /** Callback trigger when the date changes. x is the new datetime value. */
  onChange: PropTypes.func,
  /** Defines the format moment.js should use to parse and output the date to onChange */
  format: PropTypes.string,
  /** Defines additional attributes for the input element of the component. */
  inputProps: PropTypes.object,
  /** Defines the way the date is represented in the HTML input. It must be a format understanable by moment.js */
  inputFormat: PropTypes.string,
  /** Sets the initial value. Could be an empty string, or helper text. */
  defaultText: PropTypes.string,
  /** Allows to selectively display only the time picker ('time') or the date picker ('date') */
  mode: PropTypes.oneOf([
    Constants.MODE_DATE,
    Constants.MODE_DATETIME,
    Constants.MODE_TIME
  ]),
  /** The earliest date allowed for entry in the calendar view. */
  minDate: PropTypes.object,
  /** The latest date allowed for entry in the calendar view. */
  maxDate: PropTypes.object,
  direction: PropTypes.oneOf(["up", "bottom", "auto", undefined]),
  /** Highlights today's date */
  showToday: PropTypes.bool,
  /** The default view to display when the picker is shown. ('years', 'months', 'days') */
  viewMode: PropTypes.oneOf(["days", "months", "years", "date"]),
  /** Defines the z-index of the modal overlay */
  zIndex: PropTypes.number,
  /** Changes the size of the date picker input field. Sizes: "sm", "md", "lg" */
  size: PropTypes.oneOf([
    Constants.SIZE_SMALL,
    Constants.SIZE_MEDIUM,
    Constants.SIZE_LARGE
  ]),
  /** Disables clicking on some days. Goes from 0 (Sunday) to 6 (Saturday). */
  daysOfWeekDisabled: PropTypes.arrayOf(PropTypes.number),
  /** Disables the date picker */
  disabled: PropTypes.bool,
  calendarOnly: PropTypes.bool,
  /** Makes input box red */
  hasError: PropTypes.bool,
  /** Label for input */
  label: PropTypes.string,
  /** Makes input box red and shows error message when input is invalid */
  shouldValidate: PropTypes.bool,
  /** Error message to display when the date is invalid */
  invalidDateMsg: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string
};

export default DateTimeField;

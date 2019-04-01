import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import DateTimePickerDate from "./DateTimePickerDate.js";
import DateTimePickerTime from "./DateTimePickerTime.js";
import Constants from "./Constants.js";

const renderDatePicker = props => {
  if (props.showDatePicker) {
    return (
      <li>
        <DateTimePickerDate
          showPicker={props.showPicker}
          addDecade={props.addDecade}
          addMonth={props.addMonth}
          addYear={props.addYear}
          daysOfWeekDisabled={props.daysOfWeekDisabled}
          maxDate={props.maxDate}
          minDate={props.minDate}
          selectedDate={props.selectedDate}
          setSelectedDate={props.setSelectedDate}
          setViewMonth={props.setViewMonth}
          setViewYear={props.setViewYear}
          showToday={props.showToday}
          subtractDecade={props.subtractDecade}
          subtractMonth={props.subtractMonth}
          subtractYear={props.subtractYear}
          viewDate={props.viewDate}
          viewMode={props.viewMode}
        />
      </li>
    );
  }
};

const renderTimePicker = props => {
  if (props.showTimePicker) {
    return (
      <li>
        <DateTimePickerTime
          addHour={props.addHour}
          addMinute={props.addMinute}
          mode={props.mode}
          selectedDate={props.selectedDate}
          setSelectedHour={props.setSelectedHour}
          setSelectedMinute={props.setSelectedMinute}
          subtractHour={props.subtractHour}
          subtractMinute={props.subtractMinute}
          togglePeriod={props.togglePeriod}
          viewDate={props.viewDate}
        />
      </li>
    );
  }
};

const renderSwitchButton = props => {
  return props.mode === Constants.MODE_DATETIME ? (
    <li>
      <span
        className="btn picker-switch"
        onClick={props.togglePicker}
        style={{ width: "100%" }}
      >
        <span
          className={classnames(
            "glyphicon",
            props.showTimePicker ? "glyphicon-calendar" : "glyphicon-time"
          )}
        />
      </span>
    </li>
  ) : null;
};

const DateTimePicker = props => {
  return createPortal(
    <div className={classnames(props.widgetClasses)} style={props.widgetStyle}>
      <ul className="list-unstyled">
        {renderDatePicker(props)}

        {renderSwitchButton(props)}

        {renderTimePicker(props)}
      </ul>
    </div>,
    document.querySelector("body")
  );
};

DateTimePicker.propTypes = {
  showDatePicker: PropTypes.bool,
  showTimePicker: PropTypes.bool,
  subtractMonth: PropTypes.func.isRequired,
  addMonth: PropTypes.func.isRequired,
  viewDate: PropTypes.object.isRequired,
  selectedDate: PropTypes.object.isRequired,
  showToday: PropTypes.bool,
  viewMode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mode: PropTypes.oneOf([
    Constants.MODE_DATE,
    Constants.MODE_DATETIME,
    Constants.MODE_TIME
  ]),
  daysOfWeekDisabled: PropTypes.array,
  setSelectedDate: PropTypes.func.isRequired,
  subtractYear: PropTypes.func.isRequired,
  addYear: PropTypes.func.isRequired,
  setViewMonth: PropTypes.func.isRequired,
  setViewYear: PropTypes.func.isRequired,
  subtractHour: PropTypes.func.isRequired,
  addHour: PropTypes.func.isRequired,
  subtractMinute: PropTypes.func.isRequired,
  addMinute: PropTypes.func.isRequired,
  addDecade: PropTypes.func.isRequired,
  subtractDecade: PropTypes.func.isRequired,
  togglePeriod: PropTypes.func.isRequired,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  widgetClasses: PropTypes.object,
  widgetStyle: PropTypes.object,
  togglePicker: PropTypes.func,
  setSelectedHour: PropTypes.func,
  setSelectedMinute: PropTypes.func,
  showPicker: PropTypes.bool.isRequired
};

export default DateTimePicker;

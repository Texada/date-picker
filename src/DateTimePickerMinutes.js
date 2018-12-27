import React from "react";
import PropTypes from "prop-types";
import Constants from "./Constants.js";

const renderSwitchButton = props => {
  return props.mode === Constants.MODE_TIME ? (
    <ul className="list-unstyled">
      <li>
        <span
          className="btn picker-switch"
          onClick={props.onSwitch}
          style={{ width: "100%" }}
        >
          <span className="glyphicon glyphicon-time" />
        </span>
      </li>
    </ul>
  ) : null;
};

const DateTimePickerMinutes = props => {
  return (
    <div
      className="timepicker-minutes"
      data-action="selectMinute"
      style={{ display: "block" }}
    >
      {renderSwitchButton(props)}
      <table className="table-condensed">
        <tbody>
          <tr>
            <td className="minute" onClick={props.setSelectedMinute}>
              00
            </td>

            <td className="minute" onClick={props.setSelectedMinute}>
              05
            </td>

            <td className="minute" onClick={props.setSelectedMinute}>
              10
            </td>

            <td className="minute" onClick={props.setSelectedMinute}>
              15
            </td>
          </tr>

          <tr>
            <td className="minute" onClick={props.setSelectedMinute}>
              20
            </td>

            <td className="minute" onClick={props.setSelectedMinute}>
              25
            </td>

            <td className="minute" onClick={props.setSelectedMinute}>
              30
            </td>

            <td className="minute" onClick={props.setSelectedMinute}>
              35
            </td>
          </tr>

          <tr>
            <td className="minute" onClick={props.setSelectedMinute}>
              40
            </td>

            <td className="minute" onClick={props.setSelectedMinute}>
              45
            </td>

            <td className="minute" onClick={props.setSelectedMinute}>
              50
            </td>

            <td className="minute" onClick={props.setSelectedMinute}>
              55
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

DateTimePickerMinutes.propTypes = {
  setSelectedMinute: PropTypes.func.isRequired,
  onSwitch: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
};

export default DateTimePickerMinutes;

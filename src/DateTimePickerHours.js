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

const DateTimePickerHours = props => {
  const { setSelectedHour } = props;

  return (
    <div
      className="timepicker-hours"
      data-action="selectHour"
      style={{ display: "block" }}
    >
      {renderSwitchButton(props)}
      <table className="table-condensed">
        <tbody>
          <tr>
            <td className="hour" onClick={setSelectedHour}>
              01
            </td>

            <td className="hour" onClick={setSelectedHour}>
              02
            </td>

            <td className="hour" onClick={setSelectedHour}>
              03
            </td>

            <td className="hour" onClick={setSelectedHour}>
              04
            </td>
          </tr>

          <tr>
            <td className="hour" onClick={setSelectedHour}>
              05
            </td>

            <td className="hour" onClick={setSelectedHour}>
              06
            </td>

            <td className="hour" onClick={setSelectedHour}>
              07
            </td>

            <td className="hour" onClick={setSelectedHour}>
              08
            </td>
          </tr>

          <tr>
            <td className="hour" onClick={setSelectedHour}>
              09
            </td>

            <td className="hour" onClick={setSelectedHour}>
              10
            </td>

            <td className="hour" onClick={setSelectedHour}>
              11
            </td>

            <td className="hour" onClick={setSelectedHour}>
              12
            </td>
          </tr>

          <tr>
            <td className="hour" onClick={setSelectedHour}>
              13
            </td>

            <td className="hour" onClick={setSelectedHour}>
              14
            </td>

            <td className="hour" onClick={setSelectedHour}>
              15
            </td>

            <td className="hour" onClick={setSelectedHour}>
              16
            </td>
          </tr>

          <tr>
            <td className="hour" onClick={setSelectedHour}>
              17
            </td>

            <td className="hour" onClick={setSelectedHour}>
              18
            </td>

            <td className="hour" onClick={setSelectedHour}>
              19
            </td>

            <td className="hour" onClick={setSelectedHour}>
              20
            </td>
          </tr>

          <tr>
            <td className="hour" onClick={setSelectedHour}>
              21
            </td>

            <td className="hour" onClick={setSelectedHour}>
              22
            </td>

            <td className="hour" onClick={setSelectedHour}>
              23
            </td>

            <td className="hour" onClick={setSelectedHour}>
              24
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

DateTimePickerHours.propTypes = {
  setSelectedHour: PropTypes.func.isRequired,
  onSwitch: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
};

export default DateTimePickerHours;

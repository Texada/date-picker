import React, { Component } from "react";
import PropTypes from "prop-types";
import DateTimePickerMinutes from "./DateTimePickerMinutes";
import DateTimePickerHours from "./DateTimePickerHours";
import Constants from "./Constants.js";
import moment from "moment";

class DateTimePickerTime extends Component {
  state = {
    minutesDisplayed: false,
    hoursDisplayed: false
  };

  goBack = () => {
    this.setState({
      minutesDisplayed: false,
      hoursDisplayed: false
    });
  };

  showMinutes = () => {
    this.setState({
      minutesDisplayed: true
    });
  };

  showHours = () => {
    this.setState({
      hoursDisplayed: true
    });
  };

  renderMinutes = () => {
    if (this.state.minutesDisplayed) {
      return <DateTimePickerMinutes {...this.props} onSwitch={this.goBack} />;
    } else {
      return null;
    }
  };

  renderHours = () => {
    if (this.state.hoursDisplayed) {
      return <DateTimePickerHours {...this.props} onSwitch={this.goBack} />;
    } else {
      return null;
    }
  };

  get date() {
    let date = this.props.selectedDate;
    if (!moment.isMoment(date) || !date.isValid()) date = this.props.viewDate;

    return date;
  }

  renderPicker = () => {
    return !this.state.minutesDisplayed && !this.state.hoursDisplayed ? (
      <div className="timepicker-picker">
        <table className="table-condensed">
          <tbody>
            <tr>
              <td>
                <a className="btn" onClick={this.props.addHour}>
                  <span className="glyphicon glyphicon-chevron-up" />
                </a>
              </td>

              <td className="separator" />

              <td>
                <a className="btn" onClick={this.props.addMinute}>
                  <span className="glyphicon glyphicon-chevron-up" />
                </a>
              </td>

              <td className="separator" />
            </tr>

            <tr>
              <td>
                <span className="timepicker-hour" onClick={this.showHours}>
                  {this.date.format("h")}
                </span>
              </td>

              <td className="separator">:</td>

              <td>
                <span className="timepicker-minute" onClick={this.showMinutes}>
                  {this.date.format("mm")}
                </span>
              </td>

              <td className="separator" />

              <td>
                <button
                  className="btn btn-primary"
                  onClick={this.props.togglePeriod}
                  type="button"
                  style={{
                    marginLeft: -10
                  }}
                >
                  {this.date.format("A")}
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <a className="btn" onClick={this.props.subtractHour}>
                  <span className="glyphicon glyphicon-chevron-down" />
                </a>
              </td>

              <td className="separator" />

              <td>
                <a className="btn" onClick={this.props.subtractMinute}>
                  <span className="glyphicon glyphicon-chevron-down" />
                </a>
              </td>

              <td className="separator" />
            </tr>
          </tbody>
        </table>
      </div>
    ) : (
      ""
    );
  };

  render() {
    return (
      <div className="timepicker">
        {this.renderPicker()}

        {this.renderHours()}

        {this.renderMinutes()}
      </div>
    );
  }
}

DateTimePickerTime.propTypes = {
  setSelectedHour: PropTypes.func.isRequired,
  setSelectedMinute: PropTypes.func.isRequired,
  subtractHour: PropTypes.func.isRequired,
  addHour: PropTypes.func.isRequired,
  subtractMinute: PropTypes.func.isRequired,
  addMinute: PropTypes.func.isRequired,
  viewDate: PropTypes.object.isRequired,
  selectedDate: PropTypes.object.isRequired,
  togglePeriod: PropTypes.func.isRequired,
  mode: PropTypes.oneOf([
    Constants.MODE_DATE,
    Constants.MODE_DATETIME,
    Constants.MODE_TIME
  ])
};

export default DateTimePickerTime;
export { DateTimePickerTime };

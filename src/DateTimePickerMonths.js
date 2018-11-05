import React, { Component } from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import moment from "moment";

class DateTimePickerMonths extends Component {
  renderMonths = () => {
    let month = this.props.selectedDate.month();
    let monthsShort = moment.monthsShort();

    let i = 0, months = [];
    while (i < 12) {
      const classes = {
        month: true,
        active:
          i === month &&
          this.props.viewDate.year() === this.props.selectedDate.year()
      };
      months.push(
        <span
          className={classnames(classes)}
          key={i}
          onClick={this.props.setViewMonth}
        >
          {monthsShort[i]}
        </span>
      );
      i++;
    }
    return months;
  };

  render() {
    return (
      <div className="datepicker-months" style={{ display: "block" }}>
        <table className="table-condensed">
          <thead>
            <tr>
              <th className="prev" onClick={this.props.subtractYear}>
                ‹
              </th>

              <th className="switch" colSpan="5" onClick={this.props.showYears}>
                {this.props.viewDate.year()}
              </th>

              <th className="next" onClick={this.props.addYear}>
                ›
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="7">{this.renderMonths()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

DateTimePickerMonths.propTypes = {
  subtractYear: PropTypes.func.isRequired,
  addYear: PropTypes.func.isRequired,
  viewDate: PropTypes.object.isRequired,
  selectedDate: PropTypes.object.isRequired,
  showYears: PropTypes.func.isRequired,
  setViewMonth: PropTypes.func.isRequired
};

export default DateTimePickerMonths;

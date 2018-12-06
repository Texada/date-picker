import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

class DateTimePickerDays extends Component {
  renderDays = () => {
    let year = this.props.viewDate.year();
    let month = this.props.viewDate.month();
    let prevMonth = this.props.viewDate.clone().subtract(1, "months");
    let days = prevMonth.daysInMonth();
    prevMonth.date(days).startOf("week");
    let nextMonth = moment(prevMonth)
      .clone()
      .add(42, "d");

    let minDate = this.props.minDate
      ? this.props.minDate.clone().subtract(1, "days")
      : this.props.minDate;
    let maxDate = this.props.maxDate
      ? this.props.maxDate.clone()
      : this.props.maxDate;

    let html = [];
    let cells = [];

    let classes;
    while (prevMonth.isBefore(nextMonth)) {
      classes = "day";

      const prevMonthYear = prevMonth.year();
      if (
        prevMonthYear < year ||
        (prevMonthYear === year && prevMonth.month() < month)
      ) {
        classes += " old";
      } else if (
        prevMonthYear > year ||
        (prevMonthYear === year && prevMonth.month() > month)
      ) {
        classes += " new";
      }

      if (
        prevMonth.isSame(
          moment({
            y: this.props.selectedDate.year(),
            M: this.props.selectedDate.month(),
            d: this.props.selectedDate.date()
          })
        )
      ) {
        classes += " active";
      }

      if (this.props.showToday) {
        if (prevMonth.isSame(moment(), "day")) {
          classes += " today";
        }
      }

      if (
        (minDate && prevMonth.isBefore(minDate)) ||
        (maxDate && prevMonth.isAfter(maxDate))
      ) {
        classes += " disabled";
      }

      if (
        this.props.daysOfWeekDisabled.length > 0 &&
        this.props.daysOfWeekDisabled.indexOf(prevMonth.day()) !== -1
      ) {
        classes += " disabled";
      }

      cells.push(
        <td
          className={classes}
          key={prevMonth.month() + "-" + prevMonth.date()}
          onClick={this.props.setSelectedDate}
        >
          {prevMonth.date()}
        </td>
      );

      if (
        prevMonth.weekday() ===
        moment()
          .endOf("week")
          .weekday()
      ) {
        html.push(
          <tr key={prevMonth.month() + "-" + prevMonth.date()}>{cells}</tr>
        );
        cells = [];
      }

      prevMonth.add(1, "d");
    }

    return html;
  };

  render() {
    return (
      <div className="datepicker-days" style={{ display: "block" }}>
        <table className="table-condensed">
          <thead>
            <tr>
              <th className="prev" onClick={this.props.subtractMonth}>
                <span className="glyphicon glyphicon-chevron-left" />
              </th>

              <th
                className="switch"
                colSpan="5"
                onClick={this.props.showMonths}
              >
                {moment.months()[this.props.viewDate.month()]}{" "}
                {this.props.viewDate.year()}
              </th>

              <th className="next" onClick={this.props.addMonth}>
                <span className="glyphicon glyphicon-chevron-right" />
              </th>
            </tr>

            <tr>
              <th className="dow">Su</th>

              <th className="dow">Mo</th>

              <th className="dow">Tu</th>

              <th className="dow">We</th>

              <th className="dow">Th</th>

              <th className="dow">Fr</th>

              <th className="dow">Sa</th>
            </tr>
          </thead>

          <tbody>{this.renderDays()}</tbody>
        </table>
      </div>
    );
  }
}

DateTimePickerDays.propTypes = {
  subtractMonth: PropTypes.func.isRequired,
  addMonth: PropTypes.func.isRequired,
  viewDate: PropTypes.object.isRequired,
  selectedDate: PropTypes.object.isRequired,
  showToday: PropTypes.bool,
  daysOfWeekDisabled: PropTypes.array,
  setSelectedDate: PropTypes.func.isRequired,
  showMonths: PropTypes.func.isRequired,
  minDate: PropTypes.object,
  maxDate: PropTypes.object
};

DateTimePickerDays.defaultProps = {
  showToday: true
};

export default DateTimePickerDays;

import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const renderDays = props => {
  let year = props.viewDate.year();
  let month = props.viewDate.month();
  let prevMonth = props.viewDate.clone().subtract(1, "months");
  let days = prevMonth.daysInMonth();
  prevMonth.date(days).startOf("week");
  let nextMonth = moment(prevMonth)
    .clone()
    .add(42, "d");

  let minDate = props.minDate
    ? props.minDate.clone().subtract(1, "days")
    : props.minDate;
  let maxDate = props.maxDate ? props.maxDate.clone() : props.maxDate;

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
          y: props.selectedDate.year(),
          M: props.selectedDate.month(),
          d: props.selectedDate.date()
        })
      )
    ) {
      classes += " active";
    }

    if (props.showToday) {
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
      props.daysOfWeekDisabled.length > 0 &&
      props.daysOfWeekDisabled.indexOf(prevMonth.day()) !== -1
    ) {
      classes += " disabled";
    }

    cells.push(
      <td
        className={classes}
        key={prevMonth.month() + "-" + prevMonth.date()}
        onClick={props.setSelectedDate}
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

const DateTimePickerDays = props => {
  return (
    <div className="datepicker-days" style={{ display: "block" }}>
      <table className="table-condensed">
        <thead>
          <tr>
            <th className="prev" onClick={props.subtractMonth}>
              <span className="glyphicon glyphicon-chevron-left" />
            </th>

            <th className="switch" colSpan="5" onClick={props.showMonths}>
              {moment.months()[props.viewDate.month()]} {props.viewDate.year()}
            </th>

            <th className="next" onClick={props.addMonth}>
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

        <tbody>{renderDays(props)}</tbody>
      </table>
    </div>
  );
};

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

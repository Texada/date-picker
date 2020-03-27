import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const renderDays = ({
  viewDate,
  selectedDate,
  showToday,
  daysOfWeekDisabled,
  minDate,
  maxDate
}) => {
  const viewYear = viewDate.year();
  const viewMonth = viewDate.month();
  const selected = selectedDate.clone().startOf("day");
  let day = viewDate
    .clone()
    .subtract(1, "month")
    .startOf("day")
    .endOf("month")
    .startOf("week");

  const weeksToDisplay = 6;
  const nextMonth = day
    .clone()
    .add(weeksToDisplay, "weeks")
    .valueOf();

  const min = minDate ? minDate.clone().subtract(1, "days") : null;
  const max = maxDate ? maxDate.clone() : null;

  let html = [];
  let cells = [];

  const today = moment().startOf("day");
  while (day.valueOf() < nextMonth) {
    let classes = "day";

    const year = day.year();
    const month = day.month();
    if (year < viewYear || (year === viewYear && month < viewMonth)) {
      classes += " old";
    } else if (year > viewYear || (year === viewYear && month > viewMonth)) {
      classes += " new";
    }

    if (day.isSame(selected)) classes += " active";
    if (showToday && day.isSame(today)) classes += " today";

    const outOfRange = (min && day.isBefore(min)) || (max && day.isAfter(max));
    const checkDayOfWeekDisabled = () =>
      daysOfWeekDisabled.indexOf(day.day()) !== -1;
    const disabled = outOfRange || checkDayOfWeekDisabled();

    if (disabled) classes += " disabled";

    cells.push(
      <td
        className={classes}
        key={day.month() + "-" + day.date()}
        aria-disabled={disabled}
      >
        {day.date()}
      </td>
    );

    const lastDayOfWeek = 6;
    if (day.weekday() === lastDayOfWeek) {
      html.push(<tr key={day.month() + "-" + day.date()}>{cells}</tr>);
      cells = [];
    }

    day.add(1, "day");
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

        <tbody onClick={props.setSelectedDate}>{renderDays(props)}</tbody>
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

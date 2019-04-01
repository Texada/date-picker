import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import moment from "moment";

const renderMonths = props => {
  let month = props.selectedDate.month();
  let monthsShort = moment.monthsShort();

  let months = [];
  for (let i = 0; i < 12; i++) {
    const classes = {
      month: true,
      active: i === month && props.viewDate.year() === props.selectedDate.year()
    };
    months.push(
      <span
        className={classnames(classes)}
        key={i}
        onClick={props.setViewMonth}
      >
        {monthsShort[i]}
      </span>
    );
  }
  return months;
};

const DateTimePickerMonths = props => {
  return (
    <div className="datepicker-months" style={{ display: "block" }}>
      <table className="table-condensed">
        <thead>
          <tr>
            <th className="prev" onClick={props.subtractYear}>
              <span className="glyphicon glyphicon-chevron-left" />
            </th>

            <th className="switch" colSpan="5" onClick={props.showYears}>
              {props.viewDate.year()}
            </th>

            <th className="next" onClick={props.addYear}>
              <span className="glyphicon glyphicon-chevron-right" />
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan="7">{renderMonths(props)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

DateTimePickerMonths.propTypes = {
  subtractYear: PropTypes.func.isRequired,
  addYear: PropTypes.func.isRequired,
  viewDate: PropTypes.object.isRequired,
  selectedDate: PropTypes.object.isRequired,
  showYears: PropTypes.func.isRequired,
  setViewMonth: PropTypes.func.isRequired
};

export default DateTimePickerMonths;

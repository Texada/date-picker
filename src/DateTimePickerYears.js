import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const renderYears = props => {
  let years = [];
  let year = parseInt(props.viewDate.year() / 10, 10) * 10;
  year--;

  const selectedYear = props.selectedDate.year();
  for (let i = -1; i < 11; i++) {
    const classes = {
      year: true,
      old: i === -1 || i === 10,
      active: selectedYear === year
    };
    years.push(
      <span
        className={classnames(classes)}
        key={year}
        onClick={props.setViewYear}
      >
        {year}
      </span>
    );
    year++;
  }

  return years;
};

const DateTimePickerYears = props => {
  const year = parseInt(props.viewDate.year() / 10, 10) * 10;

  return (
    <div className="datepicker-years" style={{ display: "block" }}>
      <table className="table-condensed">
        <thead>
          <tr>
            <th className="prev" onClick={props.subtractDecade}>
              <span className="glyphicon glyphicon-chevron-left" />
            </th>

            <th className="switch" colSpan="5">
              {year} - {year + 9}
            </th>

            <th className="next" onClick={props.addDecade}>
              <span className="glyphicon glyphicon-chevron-right" />
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan="7">{renderYears(props)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

DateTimePickerYears.propTypes = {
  subtractDecade: PropTypes.func.isRequired,
  addDecade: PropTypes.func.isRequired,
  viewDate: PropTypes.object.isRequired,
  selectedDate: PropTypes.object.isRequired,
  setViewYear: PropTypes.func.isRequired
};

export default DateTimePickerYears;

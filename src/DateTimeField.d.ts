import * as React from "react";
import * as moment from "moment";

export interface DateTimeFieldProps {
  [key: string]: any;
  /** Represents the inital dateTime, this string is then parsed by moment.js */
  dateTime: string | number | moment.Moment;
  /** Callback trigger when the date changes. x is the new datetime value. */
  onChange: (
    /** date formatted with format prop */
    date: string,
    /** date formatted with inputFormat prop */ dateInputFormat: string
  ) => void;
  /** Defines the format moment.js should use to parse and output the date to onChange */
  format: string;
  /** Defines additional attributes for the input element of the component. */
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  /** Defines the way the date is represented in the HTML input. It must be a format understanable by moment.js */
  inputFormat?: string;
  /** Sets the initial value. Could be an empty string, or helper text. */
  defaultText?: string;
  /** Allows to selectively display only the time picker ('time') or the date picker ('date') */
  mode?: "date" | "datetime" | "time";
  /** The earliest date allowed for entry in the calendar view. */
  minDate?: moment.Moment;
  /** The latest date allowed for entry in the calendar view. */
  maxDate?: moment.Moment;
  direction?: "up" | "bottom" | "auto" | undefined;
  /** Highlights today's date */
  showToday?: boolean;
  /** The default view to display when the picker is shown. ('years', 'months', 'days') */
  viewMode?: "days" | "months" | "years" | "date";
  /** Defines the z-index of the modal overlay */
  zIndex?: number;
  /** Changes the size of the date picker input field. Sizes: "sm", "md", "lg" */
  size?: "sm" | "md" | "lg";
  /** Disables clicking on some days. Goes from 0 (Sunday) to 6 (Saturday). */
  daysOfWeekDisabled?: number[];
  /** Disables the date picker */
  disabled?: boolean;
  /** Disables the input */
  inputDisabled?: boolean;
  /** Makes input box red */
  hasError?: boolean;
  /** Label for input */
  label?: string;
  /** Makes input box red and shows error message when input is invalid */
  shouldValidate?: boolean;
  /** Error message to display when the date is invalid */
  invalidDateMsg?: string;
  /** Displays a red "*"" on the label */
  required?: boolean;
  id?: string;
}

declare const DateTimeField: React.ComponentClass<DateTimeFieldProps>;

export default DateTimeField;

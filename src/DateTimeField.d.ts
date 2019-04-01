import * as React from "react";

export interface DateTimeFieldProps {
  [key: string]: any;
  /** Represents the inital dateTime, this string is then parsed by moment.js */
  dateTime: string | number;
  /** Callback trigger when the date changes. x is the new datetime value. */
  onChange: (
    /** date formatted with format prop */
    date: string,
    /** date formatted with inputFormat prop */ dateInputFormat: string
  ) => void;
  /** Defines the format moment.js should use to parse and output the date to onChange */
  format: string;
  /** Defines additional attributes for the input element of the component. */
  inputProps: object;
  /** Defines the way the date is represented in the HTML input. It must be a format understanable by moment.js */
  inputFormat: string;
  /** Sets the initial value. Could be an empty string, or helper text. */
  defaultText: string;
  /** Allows to selectively display only the time picker ('time') or the date picker ('date') */
  mode: "date" | "datetime" | "time";
  /** The earliest date allowed for entry in the calendar view. */
  minDate: object;
  /** The latest date allowed for entry in the calendar view. */
  maxDate: object;
  direction: "up" | "bottom" | "auto" | undefined;
  /** Highlights today's date */
  showToday: boolean;
  /** The default view to display when the picker is shown. ('years', 'months', 'days') */
  viewMode: "days" | "months" | "years" | "date";
  /** Defines the z-index of the modal overlay */
  zIndex: number;
  /** Changes the size of the date picker input field. Sizes: "sm", "md", "lg" */
  size: "sm" | "md" | "lg";
  /** Disables clicking on some days. Goes from 0 (Sunday) to 6 (Saturday). */
  daysOfWeekDisabled: number[];
  /** Disables the date picker */
  disabled: boolean;
  /** Makes input box red */
  hasError: boolean;
}

declare const DateTimeField: React.ComponentClass<DateTimeFieldProps>;

export default DateTimeField;

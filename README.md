# @texada/date-picker ![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square) ![npm (scoped)](https://img.shields.io/npm/v/@texada/date-picker.svg?style=flat-square) ![](https://img.shields.io/badge/react-%3E%3D%2016.1.0-brightgreen.svg?style=flat-square) ![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@texada/date-picker.svg?style=flat-square)

This project is a fork of https://github.com/quri/react-bootstrap-datetimepicker

This project is a port of https://github.com/Eonasdan/bootstrap-datetimepicker for React.js

## Usage

Installation:
```
npm install @texada/date-picker
```

Then:
```javascript
import DateTimeField from "@texada/date-picker";
import "@texada/date-picker/dist/styles.min.css";

...

render() {
  return <DateTimeField />;
}
```
See [Examples](https://github.com/Texada/react-bootstrap-datetimepicker/tree/portal/examples) for more details.

## API

### DateTimeField

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| **dateTime** | string  | moment().format('x') | Represents the inital dateTime, this string is then parsed by moment.js |
| **format**   | string  | "x"     | Defines the format moment.js should use to parse and output the date to onChange |
| **inputFormat** | string | "MM/DD/YY h:mm A" | Defines the way the date is represented in the HTML input. It must be a format understanable by moment.js |
| **onChange** | function | x => console.log(x) | Callback trigger when the date changes. `x` is the new datetime value. |
| **showToday** | boolean | true | Highlights today's date |
| **size** | string | "md" | Changes the size of the date picker input field. Sizes: "sm", "md", "lg" |
| **daysOfWeekDisabled** | array of integer | [] | Disables clicking on some days. Goes from 0 (Sunday) to 6 (Saturday). |
| **viewMode** | string or number | 'days' | The default view to display when the picker is shown. ('years', 'months', 'days') |
| **inputProps** | object | undefined | Defines additional attributes for the input element of the component. |
| **minDate** | moment | undefined | The earliest date allowed for entry in the calendar view. |
| **maxDate** | moment | undefined | The latest date allowed for entry in the calendar view. |
| **mode** | string | undefined | Allows to selectively display only the time picker ('time') or the date picker ('date') |
| **defaultText** | string | {dateTime} | Sets the initial value. Could be an empty string, or helper text. |
| **zIndex** | number | 4000 | Defines the z-index of the modal overlay |
| **disabled** | boolean | false | Disables the date picker |
| **hasError** | boolean | false | Makes input box red |

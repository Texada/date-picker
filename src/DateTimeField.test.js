import React from "react";
import moment from "moment";
import { render } from "@testing-library/react";
import DateTimeField from "./DateTimeField";

describe("DateTimeField", () => {
  const happyDate = moment("1990-06-05 07:30");
  const label = "DateTimeField Label";

  it("shows the label", () => {
    const { getByLabelText } = render(
      <DateTimeField label={label} date={happyDate} />
    );

    const input = getByLabelText(label);
    expect(input).toBeInstanceOf(HTMLInputElement);
  });

  it("shows the defaultText", () => {
    const defaultText = "Pick a date";

    const { getByLabelText } = render(
      <DateTimeField label={label} defaultText={defaultText} />
    );

    const input = getByLabelText(label);
    expect(input.value).toBe(defaultText);
  });

  describe("resolves input format", () => {
    it("shows the right date for a given dateTime and inputFormat", () => {
      const { getByLabelText } = render(
        <DateTimeField label={label} dateTime={happyDate.format("x")} />
      );

      const input = getByLabelText(label);
      expect(input.value).toBe("06/05/90 7:30 AM");
    });
  });

  describe("when changing props", () => {
    it("changes the displayed date when dateTime changes", () => {
      const renderDateTimeField = props => (
        <DateTimeField
          label={label}
          dateTime={happyDate.format("x")}
          {...props}
        />
      );
      const { getByLabelText, rerender } = render(renderDateTimeField());

      const input = getByLabelText(label);
      rerender(
        renderDateTimeField({
          dateTime: moment("1981-06-04 05:45").format("x")
        })
      );

      expect(input.value).toBe("06/04/81 5:45 AM");
    });

    it("changes the displayed date when dateTime changes", () => {
      const renderDateTimeField = props => (
        <DateTimeField
          label={label}
          dateTime={happyDate.format("x")}
          {...props}
        />
      );
      const { getByLabelText, rerender } = render(renderDateTimeField());

      const input = getByLabelText(label);
      rerender(
        renderDateTimeField({
          inputFormat: "x"
        })
      );

      expect(input.value).toBe(happyDate.format("x"));
    });
  });
});

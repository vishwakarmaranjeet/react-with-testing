import React from "react";
import { fireEvent, render } from "@testing-library/react";
import DropDown from "../../components/DropDown";

test("It should render correctlys", ()=> {
    const { getByText } = render(<DropDown />);
    const dropDownText = getByText(/Select an option/);
    expect(dropDownText).toBeInTheDocument();
});

test("It render and submit button should be disabled", ()=> {
    const { getByText } = render(<DropDown />);
    const submitBtn = getByText(/submit/i);
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toBeDisabled();
});

test("It render input field has some value and submit button should not be disabled", ()=> {
    const { getByRole, getByText } = render(<DropDown />);
    const dropDownElement = getByRole("combobox");
    fireEvent.change(dropDownElement, { target: { value: "India" }});
    expect(dropDownElement.value).toBe("India");
    const submitBtn = getByText(/submit/i);
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).not.toBeDisabled();
    fireEvent.click(submitBtn);
});

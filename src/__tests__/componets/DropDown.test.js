import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import DropDown from "../../components/DropDown";

test("Input component should render", ()=> {
    const { getByText } = render(<DropDown />);
    const dropDownText = getByText(/Select an option/);
    expect(dropDownText).toBeInTheDocument();
});

test("Input component should render", ()=> {
    const { getByRole, getByText } = render(<DropDown />);
    const dropDownElement = getByRole("combobox");
    fireEvent.change(dropDownElement, { target: { value: "India" }});
    expect(dropDownElement.value).toBe("India");
    const submitBtn = getByText(/submit/i);
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).not.toBeDisabled();
    fireEvent.click(submitBtn);
});

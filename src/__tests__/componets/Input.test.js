import React from "react";
import { fireEvent, render } from "@testing-library/react";
import InputBox from "../../components/Input";

test("It should render", ()=> {
    const { getByPlaceholderText } = render(<InputBox/>);
    const inputElement = getByPlaceholderText("Enter your name");
    expect(inputElement).toBeInTheDocument();
});

test("It render and click me button should be disabled", ()=> {
    const { getByText } = render(<InputBox/>);
    const btnElement = getByText(/click me/i);
    expect(btnElement).toBeInTheDocument();
    expect(btnElement).toBeDisabled();
});

test("It render and input has some value and click me button should not be disable", ()=> {
    const { getByPlaceholderText, getByText } = render(<InputBox/>);
    const inputElement = getByPlaceholderText("Enter your name");
    fireEvent.change(inputElement, { target: { value: "Test input" }});
    expect(inputElement).toHaveValue("Test input");

    const btnElement = getByText(/click me/i);
    expect(btnElement).toBeInTheDocument();
    expect(btnElement).not.toBeDisabled();
    fireEvent.click(btnElement);
});


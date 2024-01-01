import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import InputBox from "../../components/Input";

test("Input component should render", ()=> {
    const { getByPlaceholderText } = render(<InputBox/>);
    const inputElement = getByPlaceholderText("Enter your name");
    expect(inputElement).toBeInTheDocument();
});

test("Input component should render", ()=> {
    const { getByPlaceholderText, getByText } = render(<InputBox/>);
    const inputElement = getByPlaceholderText("Enter your name");
    fireEvent.change(inputElement, { target: { value: "Test input" }});
    expect(inputElement.value).toBe("Test input");
    const btnElement = getByText(/click me/i);
    expect(btnElement).toBeInTheDocument();
    expect(btnElement).not.toBeDisabled();
    fireEvent.click(btnElement);
});


import { render, screen } from "@testing-library/react";
import { Greet } from "../../../components/greet/greet";

describe("Greet", () => {
  it("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  it("Greet renders with name", () => {
    render(<Greet name="World" />);
    const textElement = screen.getByText("Hello World");
    expect(textElement).toBeInTheDocument();
  });
});

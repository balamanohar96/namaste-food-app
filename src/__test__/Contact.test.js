import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

it("should contain text balaManohar", () => {
  render(<Contact />);
  const heading = screen.getByText("bala manohar");
  expect(heading).toBeInTheDocument();
});

it("Should have 2 headings", () => {
  render(<Contact />);
  const headingArr = screen.getAllByRole("heading");
  expect(headingArr.length).toBe(2);
});

it("Should have button with text SUBMIT", () => {
  render(<Contact />);
  const buttonText = screen.getByText("submit");
  expect(buttonText).toBeInTheDocument();
});

it("should have heading with multiple words", () => {
  render(<Contact />);
  const headingText = screen.getByText("im from contact page");
  expect(headingText).toBeInTheDocument();
});

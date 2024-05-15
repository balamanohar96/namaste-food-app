import ResCard from "../components/ResCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mockedSingleResData } from "../Mocks/mockedSingleResData";

it("Should render resCard with mocked data of DominosPizza restaurant", () => {
  render(<ResCard restData={mockedSingleResData} />);
  const restaurantName = screen.getByText("Domino's Pizza");
  expect(restaurantName).toBeInTheDocument();
});

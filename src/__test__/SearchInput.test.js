import { render, screen } from "@testing-library/react";
import Body from "../components/Body";
import "@testing-library/jest-dom";
import mockedResList from "../Mocks/restaurantsData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockedResList);
    },
  });
});

it("test",()=>{
  expect(true).toBeTruthy()
})
it("should have search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: "search" });
  expect(searchBtn).toBeInTheDocument();
});

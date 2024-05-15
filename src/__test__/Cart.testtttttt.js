import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { act } from "react-dom/test-utils";
import Cart from "../components/Cart";
import ResMenu from "../components/ResMenu";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import mockedMcDMenu from "../Mocks/McDonaldsFullMenu.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockedMcDMenu);
    },
  });
});

it("should render ResMenu with catagories ,Cart with selected food Items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <Cart />
        <ResMenu />
      </Provider>
    </BrowserRouter>
  );

  const homeLink = screen.getByText("Home");
  expect(homeLink).toBeInTheDocument();

  const cartText = screen.getByText("Your cart is empty");
  expect(cartText).toBeInTheDocument();

  // const fooditems = screen.getAllByTestId("foodItems");
  // expect(fooditems.length).toBe(5);
});

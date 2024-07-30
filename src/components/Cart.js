import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { foodItemsArr, quantity } = useSelector((store) => store.cartSlice);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(clearCart());
  };

  // for total cost of all items in the cart
  let cartTotal = 0;
  for (let i = 0; i < foodItemsArr.length; i++) {
    const itemCost =
      Math.round(foodItemsArr[i].itemPrice) * foodItemsArr[i].quantity;
    cartTotal = cartTotal + itemCost;
  }

  const tenPercentDiscount =
    Math.round(cartTotal * 0.1) <= 150 ? Math.round(cartTotal * 0.1) : 150;

  const decreaseBtnHandler = (index, item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(index));
    } else {
      dispatch(decreaseItemQuantity(index));
    }
  };

  return (
    <div className=" py-16 md:px-8  md:py-6">
      {foodItemsArr.length !== 0 && (
        <button
          onClick={clickHandler}
          className="border bg-orange-500 text-white px-4 py-2  ml-4 rounded-md outline-none hover:bg-orange-600"
        >
          Clear Cart
        </button>
      )}

      <div className=" rounded-md mt-6">
        {foodItemsArr.length === 0 ? (
          <div className="text-center  ">
            <h1 className="font-bold text-xl mb-3">Your cart is empty</h1>
            <p>
              You can go to{" "}
              <Link
                className="border-b-2 border-red-400 text-red-400 font-bold"
                to="/"
              >
                Home
              </Link>{" "}
              page to view more restaurants
            </p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2  px-4 ">
              {foodItemsArr.map((each, i) => (
                <div
                  key={i}
                  className="flex justify-between bg-slate-200 mt-2 p-2 rounded-md "
                >
                  <h3 className=" text-md w-3/5">{each.itemName}</h3>
                  <h3>Rs. {each.itemPrice}</h3>
                  <h3>
                    <button
                      className="bg-red-400 w-7 rounded"
                      onClick={() => decreaseBtnHandler(i, each)}
                    >
                      -
                    </button>
                    <span className="p-2">{Math.round(each.quantity)}</span>
                    <button
                      className="bg-green-500 w-7 rounded pb-1"
                      onClick={() => dispatch(increaseItemQuantity(i))}
                    >
                      +
                    </button>
                  </h3>

                  <h4 className="font-bold">
                    Rs.{" "}
                    {(
                      Math.round(each.quantity) * each.itemPrice
                    ).toLocaleString()}
                  </h4>
                </div>
              ))}
              <div className="flex  justify-between border-t-2 p-2 mt-2 font-bold">
                <h2>Total</h2>
                <p>Rs. {cartTotal.toLocaleString()}</p>
              </div>
            </div>
            <div className="md:w-1/2 px-4">
              <div className="p-2">
                <div className="flex justify-between">
                  <h2 className="font-bold text-xl">Order Summary</h2>
                  <p>( {quantity} items )</p>
                </div>

                <p className="text-sm font-semibold text-green-600">
                  Overall Savings ₹ {tenPercentDiscount}
                </p>
              </div>
              <hr></hr>

              <div className="p-2 text-sm">
                <div className="flex justify-between">
                  <h2>Order Value</h2>
                  <p className="font-bold">₹ {cartTotal.toLocaleString()}</p>
                </div>

                <div className="flex justify-between mt-1">
                  <h2>Delivery fee</h2>
                  <p className=" font-semibold">₹ 49</p>
                </div>

                <div className="flex justify-between mt-1">
                  <h2>Product Discount</h2>
                  <p className="font-bold  text-green-600">
                    - ₹ {tenPercentDiscount}
                  </p>
                </div>
              </div>
              <hr></hr>
              <div className="flex justify-between py-2 mt-2 font-bold text-xl">
                <h2>Grand Total</h2>
                <p>
                  ₹ {(cartTotal + 49 - tenPercentDiscount).toLocaleString()}
                </p>
              </div>

              <button className=" w-full font-bold rounded-sm bg-orange-500 hover:bg-orange-600 text-sm text-white py-2">
                PLACE ORDER
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;

import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const { foodItemsArr, quantity } = useSelector((store) => store.cartSlice);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(clearCart());
  };

  let cartTotal = 0;
  for (let i = 0; i < foodItemsArr.length; i++) {
    const itemCost = Math.round(foodItemsArr[i][1]);
    cartTotal = cartTotal + itemCost;
  }

  const itemsAndQuantitiesObj = {};
  for (const item of foodItemsArr) {
    if (itemsAndQuantitiesObj[item[0]]) {
      itemsAndQuantitiesObj[item[0]] += 1;
    } else {
      itemsAndQuantitiesObj[item[0]] = 1;
    }
  }

  const billingDetails = [];
  for (const [item, quantity] of Object.entries(itemsAndQuantitiesObj)) {
    const itemIndex = foodItemsArr.findIndex((each) => each[0] === item);
    const price = foodItemsArr[itemIndex][1];
    const details = [item, quantity, price];
    billingDetails.push(details);
  }

  return (
    <div className="px-8  py-6">
      {foodItemsArr.length !== 0 && (
        <button
          onClick={clickHandler}
          className="border bg-orange-500 text-white px-4 py-2 ml-4 rounded-md outline-none hover:bg-orange-600"
        >
          Clear Cart
        </button>
      )}

      <div className=" rounded-md mt-3">
        {foodItemsArr.length === 0 ? (
          <div className="text-center  ">
            <h1 className="font-bold text-xl mb-3">Your cart is empty</h1>
            <p>You can go to home page to view more restaurants</p>
          </div>
        ) : (
          <div className="flex">
            <div className="w-1/2 m-2 px-4 ">
              {billingDetails.map((each, i) => (
                <div key={i} className="flex justify-between ">
                  <h3 className=" text-md w-3/5">{each[0]}</h3>
                  <h3>
                    {Math.round(each[2])} x {each[1]}
                  </h3>
                  <h4 className="font-bold">
                    Rs. {Math.round(each[2]) * each[1]}
                  </h4>
                </div>
              ))}
              <div className="flex  justify-between border-t-2 pt-2 mt-2 font-bold">
                <h2>Total</h2>
                <p>Rs. {cartTotal}</p>
              </div>
            </div>
            <div className="w-1/2 px-8">
              <div className="p-2">
                <div className="flex justify-between">
                  <h2 className="font-bold text-xl">Order Summary</h2>
                  <p>( {quantity} items )</p>
                </div>

                <p className="text-sm font-semibold text-green-600">
                  Overall Savings ₹ 49
                </p>
              </div>
              <hr></hr>

              <div className="p-2 text-sm">
                <div className="flex justify-between">
                  <h2>Order Value</h2>
                  <p className="font-bold">₹ {cartTotal}</p>
                </div>

                <div className="flex justify-between mt-1">
                  <h2>Delivery fee</h2>
                  <p className=" font-semibold">49</p>
                </div>

                <div className="flex justify-between mt-1">
                  <h2>Product Discount</h2>
                  <p className="font-bold  text-green-600">- ₹ 49</p>
                </div>
              </div>
              <hr></hr>
              <div className="flex justify-between py-2 mt-2 font-bold text-xl">
                <h2>Grand Total</h2>
                <p>₹ {cartTotal}</p>
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

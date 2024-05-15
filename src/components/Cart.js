import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const { foodItemsArr } = useSelector((store) => {
    console.log(store);
    return store.cartSlice;
  });
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(clearCart());
  };

  let cartTotal = 0;
  for (let i = 0; i < foodItemsArr.length; i++) {
    const itemCost =
      foodItemsArr[i].card.info.defaultPrice / 100 ||
      foodItemsArr[i].card.info.price / 100;
    cartTotal = cartTotal + itemCost;
  }
  return (
    <div className="w-5/12 mx-auto shadow p-8 rounded-md mt-32">
      <button
        onClick={clickHandler}
        className="bg-black  fixed right-48 top-50 text-white px-4 py-2 rounded-md outline-none hover:bg-slate-300 hover:text-black"
      >
        Clear Cart
      </button>

      {foodItemsArr.length === 0 ? (
        <div className="text-center  ">
          <h1 className="font-bold text-xl mb-3">Your cart is empty</h1>
          <p>You can go to home page to view more restaurants</p>
        </div>
      ) : (
        <div className="   ">
          {foodItemsArr.map((each, i) => (
            <div key={i} className="flex justify-between ">
              <h3 className=" text-lg">{each.card.info.name}</h3>
              <h4 className="">
                ₹
                {each.card.info.defaultPrice / 100 ||
                  each.card.info.price / 100}
              </h4>
            </div>
          ))}
          <div className="flex font-semibold justify-between border-t-2 pt-2 mt-2">
            <h2>Total</h2>
            <p>₹{cartTotal}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;

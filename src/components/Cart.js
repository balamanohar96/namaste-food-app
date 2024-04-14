import { useEffect } from "react";
const Cart = () => {
  useEffect(() => {
    console.log("useeffect");

    return () => {
      console.log("useEffect return Cart unmounted");
    };
  }, []);
  console.log("cart render");
  return (
    <div>
      <h1>Cart Page</h1>
      <h2>please add some items into cart</h2>
    </div>
  );
};
export default Cart;

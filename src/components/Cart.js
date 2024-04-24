import { useEffect, useState, useContext } from "react";
import UserContext from "../utils/UserContext";

const Cart = () => {
  const [enteredText, setEnteredText] = useState("");
  const { setUpdatedUserName } = useContext(UserContext);

  const changeHandler = (e) => {
    setEnteredText(e.target.value);
  };

  const clickHandler = () => {
    setUpdatedUserName(enteredText);
    setEnteredText("")
  };

  useEffect(() => {
    return () => {
      // console.log("useEffect return Cart unmounted");
    };
  }, []);

  return (
    <div className="p-3">
      <h1 className="font-semibold text-xl">Cart Page</h1>
      <div className="p-4">
        <label>New User Name : </label>
        <input
          className="border border-stone-400 px-2 py-1 rounded-lg"
          onChange={(e) => changeHandler(e)}
          value={enteredText}
        ></input>
        <button
          onClick={clickHandler}
          className="border border-stone-400 px-2 py-1 rounded-md bg-blue-400 text-white ml-2"
        >
          update UserName
        </button>
      </div>
      <p>
        The name you have typed is{" "}
        <span className="font-semibold text-xl ">{enteredText}</span>
      </p>
    </div>
  );
};
export default Cart;

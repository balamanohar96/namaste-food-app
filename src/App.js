import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useContext, useEffect, useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [updatedUserName, setUpdatedUserName] = useState("");
  const contexObj = useContext(UserContext);

  useEffect(() => {
    const fetchAPI = {
      fetchedUserName: "Manohar",
    };
    setUpdatedUserName(fetchAPI.fetchedUserName);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{
          ...contexObj,
          userName: updatedUserName,
          setUpdatedUserName,
        }}
      >
        <Header  />
        <p className="mb-24"></p>
        <Outlet></Outlet>
       
      </UserContext.Provider>
    </Provider>
  );
}

export default App;

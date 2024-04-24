import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useContext, useEffect, useState } from "react";

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
    <>
      <UserContext.Provider
        value={{
          ...contexObj,
          userName: updatedUserName,
          setUpdatedUserName,
        }}
      >
        <Header />
        <Outlet></Outlet>
      </UserContext.Provider>
    </>
  );
}

export default App;

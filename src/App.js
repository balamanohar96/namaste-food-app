import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useContext, useEffect, useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Footer from "./components/Footer";

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
        <div className="min-h-screen flex justify-between flex-col ">
          <div>
            <Header />
            <p className="mb-16"></p>
            <Outlet />
          </div>
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;

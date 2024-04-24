import { createContext } from "react";

const UserContext = createContext({
  userName: "user's name",
  age: "user's age",
  city: "user's city",
});

export default UserContext;

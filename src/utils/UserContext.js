import { createContext } from "react";

const UserContext = createContext({
  userName: "user-name",
  age: "age",
  city: "city",
});

export default UserContext;

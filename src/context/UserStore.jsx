import { createContext, useState } from "react";

// context creation
export const UserContext = createContext();

const UserStore = ({ children }) => {
  //   state declear
  const [user, setUser] = useState([]);

  const addUser = (user) => {
    setUser([user]);
  };

  //   initial value
  const value = {
    user,
    setUser,
    addUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserStore;

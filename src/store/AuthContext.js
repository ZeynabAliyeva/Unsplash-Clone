import { createContext, useEffect, useState } from "react";

export const authContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [loginStatus, setloginStatus] = useState(false);
  const [fetch, setFetch] = useState(false);
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  //   useEffect(() => {
  //     if (currentUser) {
  //       setloginStatus(true);
  //     } else {
  //       setloginStatus(false);
  //     }
  //   }, currentUser);

  let value = {
    loginStatus,
    setloginStatus,
    currentUser,
    setCurrentUser,
    fetch,
    setFetch,
  };
  console.log(currentUser);
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

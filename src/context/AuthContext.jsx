import { createContext, useEffect, useState } from "react";

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isLogin, setLogin] = useState(function(){
    return localStorage.getItem("token")
  });

//   useEffect(() => {
//     if (localStorage.getItem("token"))
//          setLogin(localStorage.getItem("token"));
//   }, []);

  return (
    <authContext.Provider value={{ isLogin, setLogin }}>
      {children}
    </authContext.Provider>
  );
}

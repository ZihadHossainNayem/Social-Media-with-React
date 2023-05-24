import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //dummy
    setCurrentUser({
      id: 1,
      name: "Zihad Nayem",
      profilePic:
        "https://images.pexels.com/photos/2291471/pexels-photo-2291471.jpeg?auto=compress&cs=tinysrgb&w=1600",
    });
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

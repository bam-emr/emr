import React, { createContext, useEffect, useReducer, useState } from "react";

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  pk: null,
  sk: null,
  firstName: "",
  lastName: "",
  userType: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("pk", JSON.stringify(action.payload.pk));
      localStorage.setItem("sk", JSON.stringify(action.payload.sk));
      localStorage.setItem(
        "firstName",
        JSON.stringify(action.payload.firstName)
      );
      localStorage.setItem("lastName", JSON.stringify(action.payload.lastName));
      localStorage.setItem("userType", JSON.stringify(action.payload.userType));
      return {
        ...state,
        isAuthenticated: true,
        pk: action.payload.pk,
        sk: action.payload.sk,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        userType: action.payload.userType,
        isLoading: false,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        pk: null,
        sk: null,
        firstName: "",
        lastName: "",
        userType: "",
        isLoading: false,
      };
    default:
      return { ...state, isLoading: false };
  }
};

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const pk = JSON.parse(localStorage.getItem("pk") || null);
    const sk = JSON.parse(localStorage.getItem("sk") || null);
    const firstName = JSON.parse(localStorage.getItem("firstName") || null);
    const lastName = JSON.parse(localStorage.getItem("lastName") || null);
    const userType = JSON.parse(localStorage.getItem("userType") || null);

    console.log("in provider");
    if (pk && sk) {
      setIsLoading(false);
      dispatch({
        type: "LOGIN",
        payload: {
          pk: pk,
          sk: sk,
          firstName: firstName,
          lastName: lastName,
          userType: userType,
        },
      });
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

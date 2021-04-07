import React, { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  pk: null,
  sk: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("pk", JSON.stringify(action.payload.pk));
      localStorage.setItem("sk", JSON.stringify(action.payload.sk));
      return {
        ...state,
        isAuthenticated: true,
        pk: action.payload.pk,
        sk: action.payload.sk,
      };
    case "LOGOUT":
      localStorage.clear();
      console.log(state);
      return {
        ...state,
        isAuthenticated: false,
        pk: null,
        sk: null,
      };
    default:
      return state;
  }
};

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const pk = JSON.parse(localStorage.getItem("pk") || null);
    const sk = JSON.parse(localStorage.getItem("sk") || null);

    if (pk && sk) {
      dispatch({
        type: "LOGIN",
        payload: {
          pk,
          sk,
        },
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

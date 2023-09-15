import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";

const userContext = createContext();

export function useUserContext() {
  return useContext(userContext);
}

const initState = {
  users: [],
  oneUser: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "users":
      return { ...state, users: action.payload };
    case "oneUser":
      return { ...state, oneUser: action.payload };
    default:
      return state;
  }
}

function UserContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getOneUser(id) {
    try {
      const res = await axios.get(`${BLOGS_URL}/${id}`);
      dispatch({
        type: "oneUser",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    state,
    getOneUser,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}

export default UserContext;

import { createContext } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import reducer from "./Reducer";
import cartItems from "./data";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./Actions";

const AppContext = createContext();

const initalState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <AppContext.Provider value={{ ...state, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
  }
};

function reducer(state, action) { 
  switch (action.type) {
    case "CART_ADD_ITEM":
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      )
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
          // item._id es el id del item en el carrito, equivalente al id del producto
          // pero newItem ya viene con quantity actualizado
            item._id === existItem._id ? newItem : item
        )
        // newItem is not in cartItems, so add it
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
      
    default:
      return state;
  }
}

export function StoreProvider(props) { 
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
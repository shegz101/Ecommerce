import { createContext, useContext } from "react";

//The Data Layer
const CartContext = createContext();

//Local Storage
export const storage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];


export default CartContext;

//The Provider
// export const CartProvider = ({ reduce, initialState, children }) => {
//     <CartContext.Provider value={useReducer(reduce,initialState)}>
//         {children}
//     </CartContext.Provider>
// }

//How we access the context in any component we need it
export const useStateValue = () => useContext(CartContext);
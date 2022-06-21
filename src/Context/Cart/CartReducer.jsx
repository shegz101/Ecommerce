//This is where the logic of the data layer resides

//everything inside the data layer is referred to as State
//action-example the logic to add something to the cart
export const sumItems = (cartItems) => {
    Storage(cartItems);
    let itemCount = cartItems.reduce(
      (total, product) => total + product.quantity,
      0
    );
    let total = cartItems
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
    return { itemCount, total };
};

const Storage = (cartItems) => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.length > 0 ? cartItems : [])
    );
};
  

const CartReducer = (state, action) => {
    
    //the big switch Loop taking action as parameter with a type method
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART':
            if (!state.cartItems.find((item) => item.id === action.payload.id)) {
              state.cartItems.push({
                ...action.payload,
                quantity: 1,
              });
            }
      
            return {
              ...state,
              ...sumItems(state.cartItems),
              cartItems: [...state.cartItems],
            };
      
          // If the action type is REMOVE_ITEM, we want to remove the item from the cartItems array
        case 'REMOVE_FROM_CART':
            return {
              ...state,
              ...sumItems(
                state.cartItems.filter((item) => item.id !== action.payload.id)
              ),
              cartItems: [
                ...state.cartItems.filter((item) => item.id !== action.payload.id),
              ],
            };
      
        // If the action type is INCREASE, we want to increase the quantity of the particular item in the cartItems array
        case 'INCREASE':
            state.cartItems[
              state.cartItems.findIndex((item) => item.id === action.payload.id)
            ].quantity++;
            return {
              ...state,
              ...sumItems(state.cartItems),
              cartItems: [...state.cartItems],
            };
      
        // If the action type is DECREASE, we want to decrease the quantity of the particular item in the cartItems array
        case 'DECREASE':
            state.cartItems[
              state.cartItems.findIndex((item) => item.id === action.payload.id)
            ].quantity--;
            return {
              ...state,
              ...sumItems(state.cartItems),
              cartItems: [...state.cartItems],
            };
      
        // If the action type is CHECKOUT, we want to clear the cartItems array and set the checkout to true
        case 'CHECKOUT':
            return {
              cartItems: [],
              checkout: true,
              ...sumItems([]),
            };
      
        //If the action type is CLEAR, we want to clear the cartItems array
        case 'CLEAR':
            return {
              cartItems: [],
              ...sumItems([]),
            };
        default:
            return state;
    }
}


export default CartReducer;
export const cartReducer = (cart, action) => {
  switch (action.type) {
    case "SET_DATA":
      return [...action.payload];
    case "ADD_TO_CART":
      return [...cart, action.payload];
    case "REMOVE_FROM_CART":
      return [...cart.filter((element) => element._id !== action.payload)];
    case "INCREASAE_QUANTITY":
      return [
        ...cart.filter((element) =>
          element._id === action.payload
            ? { ...element, qty: element.qty + 1 }
            : { ...element }
        ),
      ];
    case "DECREASE_QUANTITY":
      return [
        ...cart.filter((element) =>
          element._id === action.payload
            ? { ...element, qty: element.qty - 1 }
            : { ...element }
        ),
      ];
    default:
      return [...cart];
  }
};
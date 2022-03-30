export const wishListReducer = (wishList, action) => {
  switch (action.type) {
    case "SET_DATA":
      return [...action.payload];
    case "ADD_TO_WISHLIST":
      return [...wishList, action.payload];
    case "REMOVE_FROM_WISHLIST":
      return [...wishList.filter((element) => element._id !== action.payload)];
    default:
      return [...wishList];
  }
};
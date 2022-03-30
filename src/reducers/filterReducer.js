export const filterReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "clear":
      return {
        ...state,
        category: "",
        sortByPrice: "",
        sortByRating: "",
        sortByDiscount: "",
        priceRange: "",
        sortByAccessoriesType: "",
        sortByBrands: "",
      };
    case "category":
      return { ...state, category: action.payload };
    case "sortByPrice":
      return { ...state, sortByPrice: action.payload };
    case "sortByRating":
      return { ...state, sortByRating: action.payload };
    case "sortByDiscount":
      return { ...state, sortByDiscount: action.payload };
    case "priceRange":
      return { ...state, priceRange: action.payload };
    case "sortByAccessoriesType":
      return { ...state, sortByAccessoriesType: action.payload };
    case "sortByBrands":
      console.log(" i m here");
      return { ...state, sortByBrands: action.payload };
    default:
      return { ...state };
  }
};
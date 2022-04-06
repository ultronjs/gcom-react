// export const clearFilter = (state,products) => {
//     if (
//       state.category === "" &&
//       state.sortByPrice === "" &&
//       state.sortByRating === "" &&
//       state.sortByDiscount === "" &&
//       state.priceRange === ""
//     ){
//       return [...products];
//     } 
//   }


export const getFilteredData = (state,products) => {
  return sortByDiscount(
    state,
    sortByRating(
      state,
      sortByPrice(
        state,
        sortByCategory(
          state,
          sortByPriceRange(
            state,
            sortByAccessoriesType(state, sortByBrands(state, products))
          )
        )
      )
    )
  );

}

export const sortByCategory = (state, products) => {
  switch (state.category) {
    case "PlayStation":
      return [...products].filter(
        (element) => element.categoryName === "PlayStation"
      );
    case "XBOX":
      return [...products].filter((element) => element.categoryName === "XBOX");
    case "Nintendo":
      return [...products].filter(
        (element) => element.categoryName === "Nintendo"
      );
    case "PC":
      return [...products].filter((element) => element.categoryName === "PC");
    default:
      return [...products];
  }
};

export const sortByPrice = (state,products) => {
    switch (state.sortByPrice) {
      case "lowToHigh":
        return [...products.sort((a, b) => a.currentPrice - b.currentPrice)];
      case "hightToLow":
        return [...products.sort((a, b) => b.currentPrice - a.currentPrice)];
      default: 
        return [...products];
    }
}

export const sortByRating = (state,products) => {

    switch (state.sortByRating) {
      case "5":
        return [...products.filter((element) => element.rating === 5)];
      case "4":
        return [...products.filter((element) => element.rating >= 4)];
      case "3":
        return [...products.filter((element) => element.rating >= 3)];
      default:
          return[...products]  
    }
}

export const sortByDiscount = (state, products) => {
    switch (state.sortByDiscount) {
      case "50":
        return [...products.filter((element) => element.discount >= 50)];
      case "40":
        return [...products.filter((element) => element.discount >= 40)];
      case "30":
        return [...products.filter((element) => element.discount >= 30)];
      case "20":
        return [...products.filter((element) => element.discount >= 20)];
      case "10":
        return [...products.filter((element) => element.discount >= 10)];
      default:
        return [...products];
    }
};

export const sortByPriceRange = (state, products) => {
    if(state.priceRange===""){
        return [...products]
    }
    return [...products.filter(element=>element.currentPrice<=Number(state.priceRange))]
};
export const sortByAccessoriesType = (state, products) => {
  switch (state.sortByAccessoriesType) {
    case "Controller":
      return [
        ...products.filter(
          (element) => element.accessoriesType === "Controller"
        ),
      ];
    case "Headset":
      return [
        ...products.filter((element) => element.accessoriesType === "Headset"),
      ];
    case "Headset":
      return [
        ...products.filter((element) => element.accessoriesType === "Headset"),
      ];
    case "Streaming Devices":
      return [
        ...products.filter(
          (element) => element.accessoriesType === "Streaming Devices"
        ),
      ];
    case "Thumb Grips":
      return [
        ...products.filter(
          (element) => element.accessoriesType === "Thumb Grips"
        ),
      ];
    case "Cases and Covers":
      return [
        ...products.filter(
          (element) => element.accessoriesType === "Cases and Covers"
        ),
      ];
    case "International Brands":
      return [
        ...products.filter(
          (element) => element.accessoriesType === "International Brands"
        ),
      ];
    case "VR":
      return [
        ...products.filter((element) => element.accessoriesType === "VR"),
      ];
    default:
      return [...products];
  }
};

export const sortByBrands = (state, products) => {
  const gamesProducts = [
    ...products.filter((element) => element.accessoriesType === "Games"),
  ];
  switch (state.sortByBrands) {
    case "EA":
      return [...gamesProducts.filter((element) => element.brand === "EA")];
    case "Sony":
      return [...gamesProducts.filter((element) => element.brand === "Sony")];
    case "RockStar":
      return [
        ...gamesProducts.filter((element) => element.brand === "RockStar"),
      ];
    case "Warner Bros":
      return [
        ...gamesProducts.filter((element) => element.brand === "Warner Bros"),
      ];
    case "Marvel":
      return [
        ...gamesProducts.filter((element) => element.brand === "Marvel"),
      ];
    case "Ubisoft":
      return [
        ...gamesProducts.filter((element) => element.brand === "Ubisoft"),
      ];
    default:
      return [...products];
  }
};

export const searchFilter = (items,search) => {
  return items.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
}
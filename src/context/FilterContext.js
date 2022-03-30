import { useContext ,createContext,useReducer} from 'react' 
import { filterReducer } from "../reducers";

const initialState = {
  category: "",
  sortByPrice: "",
  sortByRating: "",
  sortByDiscount: "",
  priceRange: "",
  sortByAccessoriesType: "",
  sortByBrands: "",
};
const FilterContext = createContext(initialState)

const FilterProvider = ({children}) => {

    const [state, dispatch] = useReducer(filterReducer, initialState)
    console.log(state);
    return(
        <FilterContext.Provider value={{state,dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext)

export { FilterProvider,useFilter}
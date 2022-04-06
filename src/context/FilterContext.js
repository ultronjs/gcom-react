import { useContext ,createContext,useReducer,useState} from 'react'
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
    const [search,setSearch] = useState("")
    return(
        <FilterContext.Provider value={{state,dispatch,search,setSearch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext)

export { FilterProvider,useFilter}
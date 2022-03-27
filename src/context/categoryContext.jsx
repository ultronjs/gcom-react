const { useContext } = require("react/cjs/react.development");
const { createContext } = require("react/cjs/react.production.min");

const CategoryContext = createContext()

const CategoryProvider = ({children}) => {
    return(
        <CategoryContext.Provider>
            {children}
        </CategoryContext.Provider>
    )
}

const useCategory = () => useContext(CategoryContext)

export { CategoryProvider,useCategory}
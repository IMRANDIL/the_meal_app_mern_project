
import { createContext, useState } from "react";

export const myContext = createContext();

const AppContext = ({ children }) => {

    const [Meals, setMeals] = useState([]);
    const [searchInput, setSearchInput] = useState('')
    const [isloading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null)

    return <myContext.Provider value={{ Meals, setMeals, isloading, setIsLoading, searchInput, setSearchInput, user, setUser }}>
        {children}
    </myContext.Provider>
}


export default AppContext;
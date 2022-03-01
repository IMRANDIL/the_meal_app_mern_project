
import { createContext, useState } from "react";

export const myContext = createContext();

const AppContext = ({ children }) => {

    const [Meals, setMeals] = useState([]);
    const [isloading, setIsLoading] = useState(true)

    return <myContext.Provider value={{ Meals, setMeals, isloading, setIsLoading }}>
        {children}
    </myContext.Provider>
}


export default AppContext;
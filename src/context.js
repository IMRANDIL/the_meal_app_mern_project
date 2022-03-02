
import { createContext, useState } from "react";

export const myContext = createContext();

const AppContext = ({ children }) => {

    const [Meals, setMeals] = useState([]);
    const [searchInput, setSearchInput] = useState('')
    const [isloading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    return <myContext.Provider value={{ Meals, setMeals, isloading, setIsLoading, searchInput, setSearchInput, user, setUser, email, setEmail, password, setPassword, error, setError }}>
        {children}
    </myContext.Provider>
}


export default AppContext;
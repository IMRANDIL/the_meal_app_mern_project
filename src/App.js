import React, { useContext, useEffect } from 'react';
import './App.css';


import NavbarElem from './components/Navbar/Navbar';


import Home from './pages/Home/Home';


import { myContext } from './context';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

import axios from './Axios'
import Favourites from './pages/Favourites/Favourites';







function App() {



  const { user, setUser } = useContext(myContext);




  useEffect(() => {

    const authLogin = async () => {
      try {
        const { data } = await axios.post('/auto-login');
        return setUser(data)
      } catch (error) {
        console.log(error.response.data);
      }


    }
    authLogin()


  }, [setUser])


  return (
    <BrowserRouter>


      <NavbarElem />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />

        {!user &&
          <>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </>
        }


        {
          user && (
            <Route path='/favourites' element={<Favourites />} />
          )
        }


      </Routes>




    </BrowserRouter>
  );
}

export default App;

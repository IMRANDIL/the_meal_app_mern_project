import React, { useContext } from 'react';
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









function App() {



  const { user } = useContext(myContext)

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
          </>}


      </Routes>




    </BrowserRouter>
  );
}

export default App;

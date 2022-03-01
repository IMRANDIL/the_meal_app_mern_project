import React from 'react';
import './App.css';


import NavbarElem from './components/Navbar/Navbar';


import Home from './pages/Home/Home';


import AppContext from './context';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';









function App() {

  return (
    <BrowserRouter>
      <AppContext>

        <NavbarElem />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />


        </Routes>



      </AppContext>
    </BrowserRouter>
  );
}

export default App;

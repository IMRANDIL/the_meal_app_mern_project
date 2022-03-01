import React from 'react';
import './App.css';


import NavbarElem from './components/Navbar/Navbar';


import Home from './pages/Home/Home';


import AppContext from './context';



function App() {





  return (
    <AppContext>
      <div>
        <NavbarElem />
        <Home />

      </div>
    </AppContext>
  );
}

export default App;

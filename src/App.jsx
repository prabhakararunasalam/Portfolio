import React from 'react';
import SideBar from './Components/SideBar';
import HomePage from './Pages/HomePage';
import './App.css'
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
    <BrowserRouter>
      {/* <SideBar /> */}
      <HomePage />
    </BrowserRouter>
    </>
  );
};

export default App;

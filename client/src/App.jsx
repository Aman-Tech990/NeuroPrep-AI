import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Auth from './pages/Auth';
import Home from './pages/Home';
import { getCurrentUser } from './services/api';
export const serverUrl = "http://localhost:3000";

const App = () => {

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </>
  )
}

export default App;
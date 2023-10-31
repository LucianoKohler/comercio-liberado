import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from '../Components/Body';

export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/">
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
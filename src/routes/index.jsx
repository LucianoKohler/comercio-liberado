import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from '../Components/Body';
import HomeScreen from '../Screens/HomeScreen';
// import PesquisaScreen from '../Screens/PesquisaScreen';

export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} exact path="/">
          <Route element={<HomeScreen />} exact path='/' />
          {/* <Route element={<PesquisaScreen />}path='/query' /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
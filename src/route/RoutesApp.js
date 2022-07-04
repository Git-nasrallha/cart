import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from '../components/Home';
import Product from '../components/Product';
import Carts from '../components/Carts';

const RoutesApp = () => {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='product' element={<Product />} />
      <Route exact path='/cart' element={<Carts/>} />
    </Routes>
    </>
  );
}

export default RoutesApp;
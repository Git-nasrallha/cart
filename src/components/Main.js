import React from 'react';
import { useSelector } from 'react-redux';
import Filter from './Filter';
import Nave from './Nave';


const Main = () => {
    const {productItems} = useSelector(state=>state.products);
  
    return (
        <div>
            <Nave />
            <Filter items ={productItems}/>
        </div>
    );
}

export default Main;

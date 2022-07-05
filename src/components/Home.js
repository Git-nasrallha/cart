import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { getProducts } from '../store/actions/productAction';
import Filter from './Filter';

const Home = () => {
   
    const { productItems, isLoading,filterItems } = useSelector(state => state.products);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
        // eslint-disable-next-line
    }, []);

    //{error && <p className='aler aler-danger'>  {error} </p> 

    return (
        <div className='container'>
           <Filter items ={productItems} filterItems={filterItems} />
            {isLoading ? (<p> data is loading .... </p>)
                : (
                    filterItems.length > 0 ?
                        (
                            <div className='row'>
                                {
                                    filterItems.map((item) => {
                                        return <div key={item.id} className='col-4 mb-5'> <CartItem item={item} /> </div>
                                    })
                                }
                            </div>
                        )
                        : (<p className='alert alert-danger'> no items  </p>)

                )
            }
        </div>
    );
}

export default Home;

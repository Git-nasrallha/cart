import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../CartItem';
import { getProducts } from '../store/actions/productAction';


const Home = () => {
    const { productItems, isLoading,filterItems,error } = useSelector(state => state.products);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    //{error && <p className='aler aler-danger'>  {error} </p> 

    return (
        <div className='container'>
          
            {isLoading ? (<p> data is loading .... </p>)
                : (
                    productItems.length > 0 ?
                        (
                            <div className='row'>
                                {
                                    productItems.map((item) => {
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

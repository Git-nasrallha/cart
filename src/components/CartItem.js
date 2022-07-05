import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CartItem = (props) => {
    const { image, title, price ,id} = props.item;
    return (
        <Item>
            <div className="card">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body pb-0">
                    <Link to={`/product/${id}`}>
                        <h5 className="card-title">{title} </h5>
                    </Link>
                    <div className='d-flex justify-content-between'>
                        <p className="card-text mt-2"> {`${price} $`} </p>
                        <Link className="btn btn-primary py-1" to={`/cart/${id}`} >Add To cart</Link>
                    </div>
                </div>
            </div>
        </Item>
    );
}

export default CartItem;

const Item = styled.div`
.card{
    padding-bottom:5px;
    .card-img-top{
    };
    .card-title {
        text-transform: capitalize;
        font-size: 15px;
        margin-bottom:10px
    }
} 

`


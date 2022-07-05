import React from 'react';
import styled from 'styled-components';

const CartItem = (props) => {
    const { image, title, price } = props.item;
    return (
        <Item>
            <div className="card">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body pb-0">
                    <h5 className="card-title">{title} </h5>
                    <div className='d-flex justify-content-between'>
                        <p className="card-text mt-2"> {`${price} $`} </p>
                        <button className="btn btn-primary py-1">Add To cart</button>
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


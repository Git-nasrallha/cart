import React  from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getItem } from '../helperMethod/methods';

const Product = () => {
  const { productItems } = useSelector(state => state.products);
  const {id} = useParams();
  const item = getItem(productItems, id);
  const { image, title, discription, price, avalbelSize } = item;

  return (
    <ProductStyle className="container mt-3">
      <div className='row'>
        <div className='col-6'>
          <img src={image} alt={title} />
        </div>
        <div className='col-6'>
          <div className="card text-capitalize">
            <div className="card-body">
              <h5 className="card-title mb-3">  <strong>title: </strong> {title} </h5>
              <h6 className="card-subtitle mb-3 text-muted"> <strong>price: </strong>{price} $  </h6>
              <p className="card-text mb-5"> {discription} </p>
              <ul className="list-unstyled d-flex justify-content-space-center">
                {
                  avalbelSize.map((item, index) => {
                    return <li className='btn btn-primary mx-2' key={index}>  {item} </li>
                  })
                }
              </ul>
            </div>
          </div>

        </div>
      </div>
    </ProductStyle>
  );
}

export default Product;
const ProductStyle = styled.div`
  img{
      height: 450px;
      width: 100%;
      border-radius: 20px;
      box-shadow: 14px -4px 6px #ccc;
  }
  .card{
    border:none;
    line-height:1.3
  }

`

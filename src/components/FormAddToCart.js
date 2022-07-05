import React,{useState} from 'react';
import styled from 'styled-components';
const FormAddToCart = (props) => {

    const { avalbelSize ,price} = props;
    const [cartValues ,setCartValues] = useState({
        size:'',
        qauntity:1

    });
     parseInt(cartValues.qauntity , price);
     const total = Math.trunc(cartValues.qauntity * price);
    // handel cart change
    const handelChange =(e)=>{
        setCartValues({...cartValues,[e.target.name]:e.target.value});
    }
  
    // on submit function
    const handelSubmit =(event)=>{
        event.preventDefault();
        console.log(cartValues)
        setCartValues({
            ...cartValues,
            size:'',
            qauntity:1
        })
    }

    return (
        <FormAdd>
            <h3 className='mb-3'> Add this Item to cart </h3>
            <div className='px-3 form-cart-content d-flex justify-content-between'>
                <form onSubmit={handelSubmit}>
                    <label> Address Size </label>
                    <select
                        name="size"
                        className="form-select form-select-lg mb-3 form-control"
                        aria-label=".form-select-lg example"
                        value={cartValues.size}
                        onChange={handelChange}
                    >
                        {
                            avalbelSize.map((item, index) => {
                                return <option key={index} value={item}> {item} </option>
                            })
                        }

                    </select>
                    <br />
                    <div className='form-group'>
                        <label htmlFor="qauntity" className="form-label">qauntity</label>
                        <input 
                            name="qauntity" 
                            type="number" 
                            id="qauntity" 
                            min='1' max='10' 
                            className="form-control" 
                            value={cartValues.qauntity}
                            onChange={handelChange}
                           
                            />
                    </div>
                    <button type='submit' className='btn btn-primary mt-4'> Add To Cart </button>
                </form>
                <div className='item-total-price'>
                    <h5>Total Price  </h5>
                    
                    <span>  {cartValues.qauntity}*{price} = </span> {total} $ 
                </div>
            </div>

        </FormAdd >
    );
}

export default FormAddToCart;

const FormAdd = styled.div`
.form-cart-content{
    border:1px solid #ccc;
    padding:12px;
}
.form-select{
    display: inLine;
    width: auto;
    padding: 3px 25px;
    text-transform: capitalize;
    font-size: 15px;
    margin-left: 10px;
    background-size: 9px 20px;
`


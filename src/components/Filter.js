import React ,{useState} from 'react';
import { useDispatch } from 'react-redux/es/exports';
import styled from 'styled-components'
import { getUniqueSize } from '../helperMethod/methods';
import { filterProducts } from '../store/actions/productAction';



const Filter = (props) => {
const {items} = props;
// get address size steps

// get array size from items
const avalibleSize = items.map((item)=>item['avalbelSize']);
// add avalibleSize in array sizes 
const sizes =[];
avalibleSize.map(i=>i.map((size)=>sizes.push(size)));
// get unique size from sizes
let uniqueSize = getUniqueSize(sizes);
//add all to uniqueSize
uniqueSize = ["All" , ...uniqueSize];
//state of size
const dispatch = useDispatch();
// change select value and excute filterProduct function
const handelChange =(e)=>{
      dispatch( filterProducts(e.target.value));
   
}

    return (
        <FilterApp className='container filter-component mt-2'>
            <ul className='filter list-unstyled d-flex justify-content-between text-capitalize'>
                <li> <span> {items.length } </span> products  </li>
                <li>
                    <span> size</span>
                    <select
                         className="form-select form-select-lg mb-3"
                         onChange={handelChange} 
                         >
                        {uniqueSize.map((size , index)=>{
                            return <option key={index} value={size}>{size}</option>
                        })}
                    </select>
                </li>
                <li>
                    <span> order</span>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option value="hightest">hightest </option>
                        <option value="lowest"> lowest </option>
                    </select>
                </li>

            </ul>
        </FilterApp>
    );
}

export default Filter;

const FilterApp = styled.div`
.form-select{
    display: inLine;
    width: auto;
    padding: 3px 25px;
    text-transform: capitalize;
    font-size: 15px;
    margin-left: 10px;
    background-size: 9px 20px;

}
`
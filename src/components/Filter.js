import React from 'react';
import styled from 'styled-components'
const Filter = () => {
    return (
        <FilterApp className='container filter-component mt-2'>
            <ul className='filter list-unstyled d-flex justify-content-between text-capitalize'>
                <li> <span> 9</span> products  </li>
                <li>
                    <span> size</span>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>All</option>
                        <option value="x">x</option>
                        <option value="xl">xl</option>
                        <option value="md">md</option>
                    </select>
                </li>
                <li>
                    <span> sort</span>
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
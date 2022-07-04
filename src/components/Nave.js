import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

// navbar links
const NaveLink = ({to, lable, ...res}) => {
    return (
       <>
         <li className="nav-item">
          <NavLink className="nav-link" to= {to} {...res} >{lable}</NavLink>
        </li>
       </>
    )
}

const Nave = () => {
    return (
        <>
            <NavStyle className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <NaveLink to="/" lable="home"/>
                           <NaveLink to="/product" lable="product"/>
                           <NaveLink to="/cart" lable="carts"/>
                        </ul>
                        <Link to='/admin' >admin </Link>
                    </div>
                </div>
            </NavStyle>

        </>
    );
}

export default Nave;
const NavStyle = styled.nav`
.nav-item{
    text-transform: capitalize;
}
`

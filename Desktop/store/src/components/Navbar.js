

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {FaGithub,FaShoppingCart} from "react-icons/fa";






export default class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
               {/*          
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */ }
           <Link to='/'>
               <img src={logo} alt="store" className="navbar-brand" />
           </Link>
           <ul className="navbar-nav.align-items-center">
               <li className="nav-item ml-5"></li>
               <Link to="/" className="nav-link">
                   products
               </Link>

           </ul>
           <Link to='/cart' className="ml-auto" >
               <ButtonContainer>
                   <span className ="mr-2">
                   <i ><FaShoppingCart /></i>
                   </span>
                   my cart
               </ButtonContainer>
           </Link>

           </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav `
background: var(--mainBlue);
.nav-link{
    color:(var --mainWhite);
    font-size:1.3rem;
    text-transform:capitalize ;
}


`

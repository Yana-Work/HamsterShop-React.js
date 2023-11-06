import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
   return (
      <div className='footer'>
         <div className='top'>
            <div className='item'>
               <h2>Categories</h2>
               <span><Link className='link' to='/products/5'>Sale</Link></span>
               <span><Link className='link' to='/products/2'>Men</Link></span>
               <span><Link className='link' to='/products/1'>Women</Link></span>
               <span><Link className='link' to='/products/3'>Accessories</Link></span>
               <span><Link className='link' to='/products/6'>New Arrivals</Link></span>
            </div>
            <div className='item about'>
               <h2>About</h2>
               <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
            <div className='item contactInfo'>
               <h2>Contact</h2>
               <span>WonderHamster Shop</span>
               <span>12345 Bewild - Burrowunderoak st.</span>
               <span>Woodinville</span>
               <span>Washington 12345</span>
            </div>
         </div>
         <div className='bottom'>
            <div className='left'>
               <span className='logo'>HAMSTERSHOP</span>
               <span className='copyright'>&copy; Copyright 2023. All Rights Reserved</span>
            </div>
            <div className='right'>
               <img src='img/payment.png' alt='payment' />
            </div>
         </div>
      </div>
   )
}

export default Footer

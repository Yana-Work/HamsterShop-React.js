import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
import './Navbar.scss';

const Navbar = () => {

   const [open, setOpen] = useState(false);
   const products = useSelector(state => state.cart.products);
   const [nav, setNav] = useState(false);

   const toggleMenu = () => {
      const newNavState = !nav;
      setNav(newNavState);

      if (newNavState) {
         document.body.classList.add('no-scroll');
      } else {
         document.body.classList.remove('no-scroll');
      }
   };

   const closeMenu = () => {
      setNav(false);
      document.body.classList.remove('no-scroll');
   };

   return (
      <div className='navbar'>
         <div className='wrapper'>
            <div className='left'>
               <div className='item'>
                  <Link className='link' to='/products/1'>Women</Link>
               </div>
               <div className='item'>
                  <Link className='link' to='/products/2'>Men</Link>
               </div>
               <div className='item'>
                  <Link className='link' to='/products/3'>Accessories</Link>
               </div>
            </div>
            <div className='center'>
               <Link className='link' to='/'>HAMSTERSHOP</Link>
            </div>
            <div className='right'>
               <div className='item'>
                  <Link className='link' to='/'>Homapage</Link>
               </div>
               <div className='item'>
                  <Link className='link' to='/products/5'>Sale</Link>
               </div>
               <div className='item'>
                  <Link className='link' to='/products/6'>New Arrivals</Link>
               </div>
               <div className='icons'>
                  <div className='cartIcon' onClick={() => setOpen(!open)}>
                     <ShoppingCartOutlinedIcon />
                     <span>{products.length}</span>
                  </div>
               </div>
               <div className='burger-menu'>
                  {nav ? (
                     <>
                        <CloseRoundedIcon onClick={toggleMenu} />
                        <div className={`open-burger-menu ${nav ? 'active' : ''}`}>
                           <ul>
                              <li>
                                 <Link className='link' to='/products/5' onClick={closeMenu}>Sale</Link>
                              </li>
                              <li>
                                 <Link className='link' to='/products/2' onClick={closeMenu}>Men</Link>
                              </li>
                              <li>
                                 <Link className='link' to='/products/1' onClick={closeMenu}>Women</Link>
                              </li>
                              <li>
                                 <Link className='link' to='/products/3' onClick={closeMenu}>Accessories</Link>
                              </li>
                              <li>
                                 <Link className='link' to='/products/6' onClick={closeMenu}>New Arrivals</Link>
                              </li>
                           </ul>
                        </div>
                     </>
                  ) : (
                     <>
                        <MenuRoundedIcon onClick={toggleMenu} />
                        <div className='open-burger-menu'></div>
                     </>
                  )}
               </div>
            </div>
         </div>
         {open && <Cart />}
      </div>
   );
};

export default Navbar

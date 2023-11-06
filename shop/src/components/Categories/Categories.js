import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

const Categories = () => {

   return (
      <div className='categories'>
         <div className='col'>
            <div className='row'>
               <img src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
               <button>
                  <Link className='link' to='/products/5'>Sale</Link>
               </button>
            </div>
            <div className='row'>
               <img src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
               <button>
                  <Link className='link' to='/products/2'>Men</Link>
               </button>
            </div>
         </div>
         <div className='col'>
            <div className='row'>
               <img src="https://images.pexels.com/photos/1269998/pexels-photo-1269998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
               <button>
                  <Link className='link' to='/products/1'>Women</Link>
               </button>
            </div>
         </div>
         <div className='col col-l'>
            <div className='row'>
               <div className='col'>
                  <div className='row'>
                     <img src="https://images.pexels.com/photos/975006/pexels-photo-975006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                     <button>
                        <Link className='link' to='/products/6'>New Season</Link>
                     </button>
                  </div>
               </div>
               <div className='col'>
                  <div className='row'>
                     <img src="https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                     <button>
                        <Link className='link' to='/products/3'>Accessories</Link>
                     </button>
                  </div>
               </div>
            </div>
            <div className='row'>
               <img src="https://images.pexels.com/photos/5771803/pexels-photo-5771803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
               <button>
                  <Link className='link' to='/products/4'>Shoes</Link>
               </button>
            </div>
         </div>
      </div>
   )
}

export default Categories

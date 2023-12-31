import React from 'react'
import './Card.scss'
import {Link} from 'react-router-dom'

const Card = ({ item }) => {
   
   // console.log(item)

   return (
      <Link className='link' to={`/product/${item.id}`}>
         <div className='card'>
            <div className='image'>
               {item?.attributes.isNew && <span>New Season</span>}
               <img src={item?.attributes?.img?.data?.attributes?.url} alt="" className='mainImg' />
               <img src={item?.attributes?.img2?.data?.attributes?.url} alt="" className='secondImg' />
            </div>
            <h2>{item?.attributes.title}</h2>
            <div className='prices'>
               {item?.attributes.isNew === true
                  ? <h3 className='price'>${item?.attributes.price}</h3>
                  : 
                  <>
                     <h3 className='oldPrice'>${item.oldPrice || item?.attributes.price + 20}</h3>
                     <h3 className='price'>${item?.attributes.price}</h3>
                  </>
               }
            </div>
         </div>
      </Link>
   )
}

export default Card

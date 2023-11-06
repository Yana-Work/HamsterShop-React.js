import React from 'react';
import './FeaturedProducts.scss';
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({type}) => {
      
   const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

   return (
      <div className='featuredProducts'>
         <div className='top'>
            <h2>{type} products</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         </div>
         <div className='bottom'>
            {error
               ? 'Something went wrong!'
               : loading
               ? 'loading...'
               : data.map((item) => <Card item={item} key={item.id} />)}
         </div>
      </div>
   )
}

export default FeaturedProducts

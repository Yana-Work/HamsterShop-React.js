import React from 'react'
import './List.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch';

const List = ({ subCategory, maxPrice, sort, catId }) => {

   const subCategoryFilters = subCategory.map((item) => `[filters][sub_categories][id][$eq]=${item}`).join('&');

   const { data, loading } = useFetch(
      `/products?populate=*&[filters][categories][id]=${catId}&${subCategoryFilters}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
   );

   // console.log(data);
   return (
      <div className='list'>
         {loading
            ? 'loading...'
            : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
   )
}

export default List

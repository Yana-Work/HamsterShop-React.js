import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Product.scss'
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';


const Product = () => {

   const id = useParams().id;
   const [selectedImg, setSelectedImg] = useState('img');
   const [quantity, setQuantity] = useState(1);

   const dispatch = useDispatch();
   const { data, loading } = useFetch(`/products/${id}?populate=*`);

   // console.log(data)

   return (
      <div className='product'>
         {loading
            ? ('loading...')
            : (<>
               <div className='left'>
                  <div className='images'>
                     <img
                        src={data?.attributes?.img?.data?.attributes?.url}
                        alt=""
                        onClick={(e) => setSelectedImg('img')}
                     />
                     <img
                        src={data?.attributes?.img2?.data?.attributes?.url}
                        alt=""
                        onClick={(e) => setSelectedImg('img2')}
                     />
                  </div>
                  <div className='mainImg'>
                     <img
                        src={data?.attributes?.[selectedImg]?.data?.attributes?.url}
                        alt=""
                     />
                  </div>
               </div>
               <div className='right'>
                  <h2>{data?.attributes?.title}</h2>
                  <span className='price'>${data?.attributes?.price}</span>
                  <p>{data?.attributes?.desc}</p>
                  <div className='quantity'>
                     <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                     {quantity}
                     <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                  </div>
                  <button
                     className='add'
                     onClick={() =>
                        dispatch(
                           addToCart({
                              id: data.id,
                              title: data.attributes.title,
                              desc: data.attributes.desc,
                              price: data.attributes.price,
                              img: data.attributes.img.data.attributes.url,
                              quantity,
                           })
                        )
                     }
                  >
                     <ShoppingCartOutlinedIcon />Add To Cart
                  </button>
                  <div className='info'>
                     <span>PRODUCT TYPE: {data?.attributes?.sub_categories?.data?.[0].attributes?.title}</span>
                     <hr />
                     <span>TAGS: {data?.attributes?.categories?.data?.map((item) => item.attributes?.title + '  ')}</span>
                     <hr />
                  </div>
               </div>
            </>)}
      </div>
   )
}

export default Product


import React, { useState} from 'react'
import ReactStars from "react-rating-stars-component";
import "./product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faHeart } from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from "react-router-dom";


const Product = ({product}) => {
    const navigate = useNavigate();
    // const {img,name,price,rating,_id} = product;
    const [addFavorite,setAddFavorite] = useState(false);
    // console.log(product)

    const addToFavorite = () =>{
        setAddFavorite(!addFavorite);
    }

  return (
    <article  className=' w-full cursor-pointer'>
        <div className='border-[1px] h-[380px] flex items-center justify-center p-4 relative overflow-hidden '>
            <img className='w-[250px] object-cover  ' src="" alt="" />
            <div className=' w-full h-full absolute left-0 top-0 show-panel text-center hover:bg-[rgba(255,255,255,.4)]'>
              <div className='absolute bottom-0 panel-items  w-full'>
                  <div className='w-full mx-auto'>
                     <div className='gap-2 mx-1 flex flex-wrap justify-center shadow-sm '>
                         <div className='bg-black  hover:opacity-50 active:scale-110 duration-300 flex justify-center items-center'>
                             <button className='p-2 flex justify-center items-center' onClick={addToFavorite}>
                                 <FontAwesomeIcon icon={faHeart} className={`${addFavorite ? 'text-red-500' : 'text-white'} text-xl `} type="regular" />
                             </button>
                         </div>

                         <div className='bg-black flex justify-center items-center hover:opacity-50 active:scale-110 duration-300'>
                             <button className='px-2 py-2 text-white'>
                                 <FontAwesomeIcon icon={faCartShopping} className='text-white text-lg' type="regular" /> Add to cart
                             </button>
                         </div>

                         <div className='bg-black flex justify-center items-center hover:opacity-50 active:scale-110 duration-300'>
                             <button onClick={() =>  navigate(`/productDetails/1`)} className='px-2 py-2 text-white'>
                                 Buy now
                             </button>
                         </div>
                     </div>
                  </div>
              </div>
            </div>
        </div>
        <div>
            <h4 className='mt-2 text-sm'>eww</h4>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-gray-900'>${0}</p>

                <ReactStars
                    count={5}
                    // onChange={ratingChanged}
                    value={3}
                    size={22}
                    activeColor="rgb(239 68 68)"
                    edit={false}
                />
            </div>

        </div>
    </article>
  )
}

export default Product
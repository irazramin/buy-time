import React, {useEffect, useState} from 'react'

const Product = ({product}) => {
    const {img,name,price} = product;

    // console.log(product)
  return (
    <article className=' w-full cursor-pointer'>
        <div className='border'>
            <img className='w-full object-cover' src={img} alt="" />
        </div>
        <div>
            <h4 className='mt-2 text-sm'>{name}</h4>
            <p className='font-bold text-gray-900'>${price}</p>
        </div>
    </article>
  )
}

export default Product
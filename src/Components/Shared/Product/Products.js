import React, {useEffect, useState} from 'react'
import useProduct from '../../../hooks/useProduct';
import Loading from '../Loading';
import Product from "./Product";
import { useQuery } from 'react-query';
const Products = () => {

    const {products,isLoading} = useProduct()

    if(isLoading){
        return <Loading />
      }
  return (
   <>
       <h2 className='my-5 font-bold text-3xl'>Latest Products</h2>
       <div className='grid xl:grid-cols-4 lg:grid-cols-3 gap-x-4 gap-y-6 md:grid-cols-2 grid-cols-1 mx-2 lg:mx-0'>
           {products.map((product,idx) => <Product key={product._id}  product={product}/>)}
       </div>
   </>
  )
}

export default Products
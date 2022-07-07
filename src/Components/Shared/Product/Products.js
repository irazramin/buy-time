import React, {useEffect, useState} from 'react'
import Product from "./Product";

const Products = () => {
    const [products,setProducts] = useState([]);


    useEffect(() =>{
        fetch(`product.json`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    },[]);

  return (
   <>
       <h2 className='my-5 font-bold text-3xl'>Latest Products</h2>
       <div className='grid xl:grid-cols-4 lg:grid-cols-3 gap-x-4 gap-y-6 md:grid-cols-2 grid-cols-1 mx-2 lg:mx-0'>
           {products.map((product,idx) => <Product  product={product}/>)}
       </div>
   </>
  )
}

export default Products
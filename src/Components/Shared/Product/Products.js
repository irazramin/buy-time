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
    <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 mx-2 lg:mx-0'>
        {products.map((product,idx) => <Product  product={product}/>)}
    </div>
  )
}

export default Products
import React, {useEffect, useState} from 'react'
import MultiRangeSlider from "react-js-multi-range-sliders";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Product from "../../Shared/Product/Product";
import Footer from "../../Shared/Footer";
const Categories = () => {

  const [minValue, setMinValue] = useState(25);
  const [maxValue, setMaxValue] = useState(75);
  const [colp,setColp]  = useState(false)
  const [products,setProducts] = useState([]);


  useEffect(() =>{
    fetch(`product.json`)
        .then(res => res.json())
        .then(data => {
          setProducts(data)
        })
  },[]);
  return (
    <div >
     <div className='2xl:w-[65%] md:w-[85%] sm:w-[90%] mx-auto'>
       <div className='grid grid-cols-1 md:grid-cols-12 gap-2 mx-2'>
         <div className='col-span-6 md:col-span-3'>
           <div className='px-5 py-2 bg-red-50 '>
             <div className='flex justify-between items-center bg-red-700 py-1 px-2 text-white'>
               <h2 className='text-lg font-semibold '>Categories</h2>
               <button data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false"
                       aria-controls="collapseExample">

                 <FontAwesomeIcon icon={faPlus}/>
               </button>
             </div>
             <hr className='mt-3 border-2 border-gray-300'/>

             <div className='collapse' id="collapseExample">
               <div className='mt-10'>
                 <h2 className='text-2xl font-bold text-red-500'>Brands</h2>
                 <div className='mt-2'>
                   <div className="form-check my-1">
                     <input
                         className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                         type="checkbox" value="" id="flexCheckDefault"/>
                     <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                       Titan
                     </label>
                   </div>
                   <div className="form-check my-1">
                     <input
                         className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                         type="checkbox" value="" id="flexCheckDefault"/>
                     <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                       Casio
                     </label>
                   </div>
                   <div className="form-check my-1">
                     <input
                         className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                         type="checkbox" value="" id="flexCheckDefault"/>
                     <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                       Cellox
                     </label>
                   </div>
                   <div className="form-check my-1">
                     <input
                         className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                         type="checkbox" value="" id="flexCheckDefault"/>
                     <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                       Fiyta
                     </label>
                   </div>
                   <div className="form-check my-1">
                     <input
                         className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                         type="checkbox" value="" id="flexCheckDefault"/>
                     <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                       Seiko
                     </label>
                   </div>
                 </div>
               </div>

               <div className='mt-10'>
                 <h2 className='text-2xl font-bold text-red-500'>Gender</h2>
                 <div className='mt-2'>
                   <div className="form-check my-1">
                     <input
                         className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                         type="checkbox" value="" id="flexCheckDefault"/>
                     <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                       Men
                     </label>
                   </div>
                   <div className="form-check my-1">
                     <input
                         className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                         type="checkbox" value="" id="flexCheckDefault"/>
                     <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                       Women
                     </label>
                   </div>
                   <div className="form-check my-1">
                     <input
                         className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                         type="checkbox" value="" id="flexCheckDefault"/>
                     <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                       Kids
                     </label>
                   </div>
                 </div>


               </div>

               <div className='mt-10'>
                 <h2 className='text-2xl font-bold text-red-500'>Materials</h2>
                 <div className='mt-2'>
                   <div className="form-check my-1">
                     <input
                         className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                         type="checkbox" value="" id="flexCheckDefault"/>
                     <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                       Leather
                     </label>
                   </div>
                   <div className="form-check my-1">
                     <input
                         className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                         type="checkbox" value="" id="flexCheckDefault"/>
                     <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                       Chain
                     </label>
                   </div>
                 </div>

               </div>

               <div className='my-10'>
                 <h2 className='text-2xl font-bold text-red-500'>Price Range</h2>

                 <div className='flex justify-center items-center gap-4 mt-3'>
                   <div className='flex justify-center items-center gap-1'>
                     <p className='text-lg font-bold text-black'> From</p>
                     <input type="text" className='w-[80px] border' value={minValue}/>
                   </div>

                   <div className='flex justify-center items-center gap-1'>
                     <p className='text-lg font-bold text-black'> To</p>
                     <input type="text" className='w-[80px] border' value={maxValue}/>

                   </div>
                 </div>
                 <MultiRangeSlider
                     min={100}
                     max={20000}
                     title=""
                     className="text-red-500"
                     onChange={({min, max}) => {
                       setMinValue(min)
                       setMaxValue(max)
                     }}
                 />
               </div>


             </div>
           </div>
         </div>


         <div className='col-span-6 md:col-span-9 shadow-lg'>
           <div className='px-3 py-2'>
             <div className='flex justify-between items-center bg-red-700 py-1 px-2 text-white'>
               <h2 className='text-lg font-semibold '>Categories Items</h2>
             </div>

             <div>
               <div className='grid  lg:grid-cols-3 gap-x-4 gap-y-6 md:grid-cols-2 grid-cols-1  lg:mx-0'>
                 {products.map((product, idx) => <Product product={product}/>)}
               </div>
             </div>
           </div>
         </div>
       </div>
       <hr className='my-10'/>
     </div>
      <Footer/>
    </div>
  )
}

export default Categories
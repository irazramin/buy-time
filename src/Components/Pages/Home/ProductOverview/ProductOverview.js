import React from 'react';

const ProductOverview = () => {
    return (
        <section className='2xl:w-[65%] md:w-[85%] sm:w-[90%] mx-auto mt-[200px]'>
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-2'>
               <div className='shadow p-5 flex justify-center items-center gap-5'>
                   <div>
                       <h2 className='text-2xl font-semibold text-red-700'>Leather</h2>
                       <p className=''>Leather's are authentic.</p>

                   </div>
                   <div>
                       <img className='object-cover w-[120px]' src="https://timezonebd.com/uploads/products/1683WL02.jpg" alt="" />
                   </div>
               </div>

               <div className='shadow p-5 flex justify-center items-center gap-5 hover:bg-[rgba(255,255,255,.4)] cursor-pointer'>
                   <div>
                       <h2 className='text-2xl font-semibold text-red-700'>Luxury</h2>
                       <p className=''>Luxury products are available.</p>

                   </div>
                   <div>
                       <img className='object-cover w-[120px]' src="https://timezonebd.com/uploads/products/TM7A15FMCCA4R5.jpg" alt="" />
                   </div>
               </div>

               <div className='shadow p-5 flex justify-center items-center gap-5 hover:bg-[rgba(255,255,255,.4)] cursor-pointer'>
                   <div>
                       <h2 className='text-2xl font-semibold text-red-700'>Good design</h2>
                       <p className=''>Choose your design's.</p>

                   </div>
                   <div>
                       <img className='object-cover w-[120px]' src="https://timezonebd.com/uploads/products/CL588ZFRGBRMT.jpg" alt="" />
                   </div>
               </div>
           </div>
        </section>
    );
};

export default ProductOverview;

import React from 'react'
import loader from "../../assests/logo/loader.svg"
const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen -mt-[100px]'>
        <img className='w-[100px]' src={loader} alt=''/>
    </div>
  )
}

export default Loading
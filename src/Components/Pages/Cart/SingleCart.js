import React from 'react'
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SingleCart = ({cart,inscreaseQuantity,decreaseQuantity,cartQ}) => {


    const deleteCartItem = id =>{
        fetch(`http://localhost:5000/api/addtocart/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
  return (
    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div className="flex items-center justify-center gap-5">
                            <img
                              className="w-[80px] h-[120px] "
                              src={cart.img}
                              alt=""
                            />
                            <div>
                              <p className="font-semibold">{cart.name}</p>
                              <p>#ORDER{cart._id.slice(0,10)}</p>
                              <p>{cart.color}</p>
                            </div>
                          </div>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className="flex justify-start items-center my-5">
                            <div className="flex justify-start items-center border gap-3 p-[2px]">
                              <button
                                onClick={() => decreaseQuantity(cart)}
                                className="bg-slate-200 py-1 px-3 active:scale-90 duration-300"
                              >
                                {" "}
                                <FontAwesomeIcon icon={faMinus} />{" "}
                              </button>
                              <input
                                value={cartQ ? cartQ : cart.quantity}
                                className="border-[2px] w-[40px]"
                                type="text"
                              />
                              <button
                                onClick={() => inscreaseQuantity(cart)}
                                className="bg-slate-200 py-1 px-3 active:scale-90 duration-300"
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap font-bold">
                          ৳ {cart.price}
                        </td>
                        <td class="text-sm text-gray-900  px-6 py-4 whitespace-nowrap  font-bold">
                          ৳ {cart.price * cart.quantity}
                        </td>

                        <div className='mt-3 mr-3 cursor-pointer'>
                            <button onClick={() => deleteCartItem(cart._id)}><FontAwesomeIcon icon={faTimes} className='text-xl' /></button>
                        </div>
                      </tr>
  )
}

export default SingleCart
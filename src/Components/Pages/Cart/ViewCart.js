import React, { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCart from "../../../hooks/useCart";
import Loading from "../../Shared/Loading";
import SingleCart from "./SingleCart";

const ViewCart = () => {
  const [cartQ, setCartQ] = useState(0);
  const {carts, isLoading,setCarts} = useCart();


  if(isLoading){
    return <Loading />
  }


  const inscreaseQuantity = (car) =>{
    let cartss = carts.map(cart => {
        if(cart.name === car.name) {
            if(cart.quantity >= 10){
                cart.quantity = 10;
            }else{
                cart.quantity += 1;
            }
        }
        return cart;
    })

    setCarts(cartss);
  }

  const decreaseQuantity = (car) =>{
    let cartss = carts.map(cart => {
        if(cart.name === car.name) {
            if(cart.quantity <= 0){
                cart.quantity = 0;
            }else{
                cart.quantity -= 1;
            }
        }
        return cart;
    })

    setCarts(cartss);
  }
  return (
    <div className="2xl:w-[65%] md:w-[85%] sm:w-[90%] mx-auto">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <div className="flex justify-between items-center my-3">
            <h2 className="text-2xl font-bold  ">Shopping Cart</h2>
            <h2 className="text-2xl font-bold  ">{carts.length} items</h2>
          </div>
          <hr className="mt-10 border border-slate-300" />
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Product details
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Price Total
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {carts.map(cart => <SingleCart cart={cart} cartQ={cartQ} key={cart._id} inscreaseQuantity={inscreaseQuantity} decreaseQuantity={decreaseQuantity} />)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="bg-slate-50">
            <div className="my-3">
              <h2 className="text-2xl font-bold text-center">Order summary</h2>
              <hr className="mt-10 border border-slate-300" />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center">
                <p className="font-bold">item</p>
                <p className="font-bold">৳ 10000</p>
              </div>

              <div className="mt-10">
                <h2 className="font-bold">Shipping</h2>
                <div className="mt-3">
                  <div class="flex justify-start">
                    <div>
                      <div class="form-check">
                        <input
                          class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          checked
                        />
                        <label
                          class="form-check-label inline-block text-gray-800"
                          for="flexRadioDefault1"
                        >
                          Standard (৳ 60)
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          class="form-check-label inline-block text-gray-800"
                          for="flexRadioDefault2"
                        >
                          Permium (৳ 120)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div class="flex justify-center">
                  <div class="mb-3 xl:w-96">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label font-bold inline-block mb-2 text-gray-700"
                    >
                      Promo Code
                    </label>
                    <input
                      type="text"
                      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                      id="exampleFormControlInput1"
                      placeholder="code"
                    />

                    <button
                      type="button"
                      class="inline-block px-5 py-3 mt-5 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>

          <hr className="mt-10 border border-slate-300" />

          <div className="mt-10">
          <div className="flex justify-between items-center">
                <p className="font-bold">Total</p>
                <p className="font-bold">৳ 10000</p>
              </div>
          </div>

          <div className="my-8">
          <button
                      type="button"
                      class="inline-block w-full px-6 py-3 mt-5 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Checkout
                    </button>
          </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;

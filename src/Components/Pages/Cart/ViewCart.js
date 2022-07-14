import React, { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCart from "../../../hooks/useCart";
import Loading from "../../Shared/Loading";
import SingleCart from "./SingleCart";
import OrderSummary from "./OrderSummary";

const ViewCart = () => {
  const [cartQ, setCartQ] = useState(0);
  const { carts, isLoading, setCarts } = useCart();
  let totalPrice = 0;
  let totalQty = 0;
  let singleProductPrices = [];

  if (isLoading) {
    return <Loading />;
  }

  const inscreaseQuantity = (car) => {
    let cartss = carts.map((cart) => {
      if (cart.name === car.name) {
        if (cart.quantity >= 10) {
          cart.quantity = 10;
        } else {
          cart.quantity += 1;
        }
      }
      return cart;
    });

    setCarts(cartss);
  };

  const decreaseQuantity = (car) => {
    let cartss = carts.map((cart) => {
      if (cart.name === car.name) {
        if (cart.quantity <= 0) {
          cart.quantity = 0;
        } else {
          cart.quantity -= 1;
        }
      }
      return cart;
    });

    setCarts(cartss);
  };

  carts.forEach((cart) => {
    totalQty += cart.quantity;

    singleProductPrices.push(cart.quantity * cart.price);
  });

  singleProductPrices.forEach((single) => {
    totalPrice += single;
  });

  console.log(totalPrice);
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
                        {
                            carts.length === 0 ? 
                            <>
                                <div className="text-center  flex justify-center">
                                    <h2 className="mt-20 font-bold text-3xl text-neutral-400">No cart item found! </h2>
                                </div>
                            
                            </>
                            :
                            carts.map((cart) => (
                                <SingleCart
                                  cart={cart}
                                  cartQ={cartQ}
                                  key={cart._id}
                                  inscreaseQuantity={inscreaseQuantity}
                                  decreaseQuantity={decreaseQuantity}
                                />
                              ))
                        }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <OrderSummary totalQty={totalQty}  totalPrice={totalPrice}/>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;

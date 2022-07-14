import React from 'react'

const OrderSummary = ({totalQty,totalPrice  }) => {
  return (
    <div className="bg-slate-50">
            <div className="my-3">
              <h2 className="text-2xl font-bold text-center">Order summary</h2>
              <hr className="mt-10 border border-slate-300" />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center">
                <p className="font-bold">{totalQty} item</p>
                <p className="font-bold">৳ {totalPrice  }</p>
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
  )
}

export default OrderSummary
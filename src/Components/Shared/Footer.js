import React from 'react';

const MyComponent = () => {
    return (
        <footer className="bg-gray-100 text-center mt-10 ">
            <div className="px-6 pt-6">
                <form action="">
                    <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
                        <div className="md:ml-auto md:mb-6">
                            <p className="text-gray-800">
                                <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>

                        <div className="md:mb-6">
                            <input
                                type="text"
                                className="
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
              focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none
            "
                                id="exampleFormControlInput1"
                                placeholder="Email address"/>
                        </div>

                        <div className="md:mr-auto mb-6">
                            <button type="button"
                                    className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Subscribe
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="text-center text-gray-700 p-4">
                © 2022 Copyright:
                <a className="text-gray-800" href="https://tailwind-elements.com/"> Buy Time</a>
            </div>
        </footer>
    );
};

export default MyComponent;

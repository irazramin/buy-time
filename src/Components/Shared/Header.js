import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav class='relative w-full flex flex-wrap items-center justify-between py-[10px] bg-white text-stone-900 shadow-sm navbar navbar-expand-lg navbar-light'>
        <div class='xl:w-[70%] lg:w-[80%] md:w-[85%] sm:w-[90%] md:mx-auto   flex flex-wrap items-center justify-between px-6'>
          <button
            class='navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent1'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='bars'
              class='w-6'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path
                fill='currentColor'
                d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'
              ></path>
            </svg>
          </button>
          <div
            class='collapse navbar-collapse flex-grow items-center'
            id='navbarSupportedContent1'
          >
            <a class='text-xl  pr-2 font-semibold' href='#'>
              Navbar
            </a>
            <ul class='navbar-nav flex flex-col pl-0 list-style-none mr-auto'>
              <li class='nav-item p-2'>
                <Link to='/' class='nav-link font-medium text-stone-900' >
                  Home
                </Link>
              </li>
              <li class='nav-item p-2'>
                <Link to='/categories' class='nav-link font-medium text-stone-900' >
                  Categories
                </Link>
              </li>
              <li  class='nav-item p-2'>
                <Link to='/myorders' class='nav-link font-medium text-stone-900' >
                  My Orders
                </Link>
              </li>
              <li class='nav-item p-2'>
                <Link to='/aboutus' class='nav-link font-medium text-stone-900' >
                  About us
                </Link>
              </li>
            </ul>
          </div>
<div className="xl:mx-5 lg:mx-4 md:mx-0 hidden md:block">
    <div class="flex justify-center items-center ">
  <div class=" xl:w-96">
    <div class="input-group relative flex flex-wrap items-center w-full">
      <input type="search" class="form-control relative flex-auto  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
      <button class="btn inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </button>
    </div>
  </div>
</div>
</div>
          <div class='flex items-center justify-end lg:relative lg:top-0 fixed  top-5 right-0'>
            <div class='dropdown relative'>
              <a
                class=' hover:opacity-80 focus:opacity-80 mr-4 dropdown-toggle hidden-arrow flex items-center'
                href='#'
                id='dropdownMenuButton1'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='shopping-cart'
                  class='w-5'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z'
                  ></path>
                </svg>
                <span class=' bg-red-500 absolute text-white rounded-full text-xs -mt-2 ml-2.5 py-0 px-1'>
                  1
                </span>
              </a>
              {/* <ul
                class='dropdown-menu min-w-max absolute hidden bg-white text-base z-50 mx-auto py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0'
                aria-labelledby='dropdownMenuButton1'
              >
                <li>
                  <a
                    class='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                    href='#'
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    class='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                    href='#'
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    class='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                    href='#'
                  >
                    Something else here
                  </a>
                </li>
              </ul> */}
            </div>
            <div class='dropdown relative'>
              {/* <a
                class='dropdown-toggle flex items-center hidden-arrow'
                href='#'
                id='dropdownMenuButton2'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <img
                  src='https://mdbootstrap.com/img/new/avatars/2.jpg'
                  class='rounded-full'
                  alt=''
                  loading='lazy'
                />
              </a> */}
              <ul
                class='dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0'
                aria-labelledby='dropdownMenuButton2'
              >
                <li>
                  <a
                    class='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                    href='#'
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    class='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                    href='#'
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    class='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                    href='#'
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header
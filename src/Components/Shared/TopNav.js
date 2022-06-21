import { faEnvelope, faLanguage, faPhone, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopNav = () => {
  return (
    <div className=' text-white py-2 border-b-[1px] text-sm font-medium md:block hidden bg-stone-900 '>
      <div className='xl:w-[70%] lg:w-[80%] md:w-[85%] sm:w-[90%] mx-auto  flex items-center justify-between'>
        <div className=' flex items-center justify-center gap-3'>
          <div className=' flex items-center justify-center gap-3 border-r-[1px] pr-2'>
            <FontAwesomeIcon icon={faPhone} className='text-red-500' />
            <div className='mt-1'>
              <p className='my-0'>
                <span>+880172282373</span>
              </p>
            </div>
          </div>
          <div className=' flex items-center justify-center gap-3'>
            <FontAwesomeIcon icon={faEnvelope} className='text-red-500' />
            <div>
              <p className='my-0'>
                <span>support@mail.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center gap-3'>
          <div className='border-r-[1px] pr-3 '>
            <div className='flex justify-center items-center gap-3'>
              <div>
                <FontAwesomeIcon icon={faUserAlt} className='text-red-500' />
              </div>
              <div class='dropdown relative'>
                <button
                  class='
        dropdown-toggle
       text-sm
        flex
        items-center
        whitespace-nowrap
      '
                  type='button'
                  id='dropdownMenuSmallButton'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  My Account
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='caret-down'
                    class='w-2 ml-2'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 320 512'
                  >
                    <path
                      fill='currentColor'
                      d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'
                    ></path>
                  </svg>
                </button>
                <ul
                  class='
        dropdown-menu
        min-w-max
        absolute
        hidden
        bg-white
        text-base
        z-50
        float-left
        py-2
        list-none
        text-left
        rounded-lg
        shadow-lg
        mt-1
        hidden
        m-0
        bg-clip-padding
        border-none
      '
                  aria-labelledby='dropdownMenuSmallButton'
                >
                  <li>
                    <a
                      class='
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          '
                      href='#'
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      class='
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          '
                      href='#'
                    >
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className='flex justify-center items-center gap-3'>
              <div>
                <FontAwesomeIcon icon={faLanguage} className='text-red-500' />
              </div>
              <div class='dropdown relative'>
                <button
                  class='
        dropdown-toggle
       text-sm
        flex
        items-center
        whitespace-nowrap
      '
                  type='button'
                  id='dropdownMenuSmallButton'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Language
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='caret-down'
                    class='w-2 ml-2'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 320 512'
                  >
                    <path
                      fill='currentColor'
                      d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'
                    ></path>
                  </svg>
                </button>
                <ul
                  class='
        dropdown-menu
        min-w-max
        absolute
        hidden
        bg-white
        text-base
        z-50
        float-left
        py-2
        list-none
        text-left
        rounded-lg
        shadow-lg
        mt-1
        hidden
        m-0
        bg-clip-padding
        border-none
      '
                  aria-labelledby='dropdownMenuSmallButton'
                >
                  <li>
                    <a
                      class='
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          '
                      href='#'
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      class='
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          '
                      href='#'
                    >
                      Bangla
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

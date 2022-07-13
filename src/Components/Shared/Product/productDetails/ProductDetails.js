import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "react-query";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Loading from "../../Loading";
const ProductDetails = () => {
  const { id } = useParams();
  const [addFav, setAddFav] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery(["product", id], () =>
    fetch(`http://localhost:5000/api/watches/${id}`).then((res) => res.json())
  );

  if(isLoading){
    return <Loading />
  }
  return (
    <div className="2xl:w-[65%] md:w-[85%] sm:w-[90%] mx-auto my-20">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-5 ">
          <div className="border">
            <img
              src={
                (activeSlide === 4 || activeSlide === 3) && product.img
                  ? product.img
                  : activeSlide === 5 && product.img2
                  ? product.img2
                  : product.img3 && product.img3
              }
              className="object-cover w-[300px] mx-auto"
              alt=""
              srcset=""
            />
            <>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                onSlideChange={(e) => setActiveSlide(e.activeIndex)}
              >
                <SwiperSlide>
                  <img
                    src={product.img}
                    className="object-cover w-[80px] mx-auto"
                    alt=""
                    srcset=""
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <img
                    src={product.img2}
                    className="object-cover w-[80px] mx-auto"
                    alt=""
                    srcset=""
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <img
                    src={product.img3}
                    className="object-cover w-[80px] mx-auto"
                    alt=""
                    srcset=""
                  />
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </div>
        <div className="col-span-7">
          <div className="flex gap-1 items-center">
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              value={product.rating}
              size={22}
              activeColor="rgb(239 68 68)"
              edit={false}
            />
            <p>({product.rating})</p>
          </div>
          <h2 className="text-lg font-semibold">Model no. {product.name}</h2>

          <div>
            <p className="text-2xl font-semibold mt-1 text-red-600">
              ৳ {product.price}.00
            </p>
          </div>

          <div className="gap-2 flex mt-5">
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Buy now
            </button>
            <button
              type="button"
              class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Add to cart
            </button>
            <button
              type="button"
              onClick={() => setAddFav(!addFav)}
              class=" px-4 flex justify-center items-center py-2 border-2 border-red-600  font-medium text-lg leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              <FontAwesomeIcon
                className={`${addFav ? "text-red-600" : "text-gray-500"}`}
                icon={faHeart}
              />
            </button>
          </div>
          <hr className="mt-5 mb-3 border-[1px]" />
          <div>
            <p className="my-1">
              <span className="font-semibold">Brand: </span>{" "}
              <span className="uppercase medium">{product.brand}</span>
            </p>
            <p className="my-1">
              <span className="font-semibold">Gender: </span>{" "}
              <span className="uppercase medium">{product.gender}</span>
            </p>
            <p className="my-1">
              <span className="font-semibold">Color: </span>{" "}
              <span className="uppercase medium">{product.color}</span>
            </p>
            <p className="my-1">
              <span className="font-semibold">Bracelet: </span>{" "}
              <span className="uppercase medium">{product.bracelet}</span>
            </p>
          </div>
          <div className="mt-5">
            <span className="font-semibold"> Description :</span>
            <p>{product.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

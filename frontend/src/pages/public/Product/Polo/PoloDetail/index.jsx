import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./PoloDetail.module.scss";
import classNames from "classnames/bind";

import { Link, useParams } from "react-router-dom";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function PoloDetail() {
  // const [details, setDetails] = useState({});
  // const [quanity, setQuanity] = useState(1);
  // const location = useLocation();
  // useEffect(() => {
  //     setDetails(location.state.item);
  // }, []);
  return (
    // <div className={cx('wrapper')}>
    //     <div className={cx('inner')}>
    //         <div className={cx('left')}>
    //             <div className={cx('images')}>
    //                 <img src={details.img} />
    //             </div>
    //         </div>

    //         <div className={cx('right')}>
    //             <h2>{details.name}</h2>
    //             <span className={cx('price')}>{details.price}.000</span>
    //             <p>{details.mainDescription}</p>
    //             <div className={cx('quanity')}>
    //                 <button onClick={() => setQuanity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
    //                 {quanity}
    //                 <button onClick={() => setQuanity((prev) => prev + 1)}>+</button>
    //             </div>

    //             <div className={cx('add')}>
    //                 <FontAwesomeIcon icon={faShoppingCart} className={cx('icon-cart')} />
    //                 <Link to="/cart">
    //                     <Button className={cx('cart')}>Thêm vào giỏ</Button>
    //                 </Link>
    //             </div>
    //             <hr />

    //             <div className={cx('info')}>
    //                 <span>Tên áo: {details.name}</span>
    //                 <span>Loại áo: {details.type}</span>
    //                 <span>Tag: {details.type}, Man, Unisex</span>
    //             </div>
    //             <hr />
    //             <div className={cx('info')}>
    //                 <span>{details.subDescription}</span>
    //                 <hr />
    //                 <span>Sản xuất tại: {details.fromTo}</span>
    //                 <hr />
    //                 <span>FAQ</span>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <div className="w-[1320px] flex m-auto">
      <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                  <img
                    src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg"
                    alt
                    className="object-cover w-full lg:h-full "
                  />
                </div>
                <div className="flex-wrap hidden md:flex ">
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                    >
                      <img
                        src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg"
                        alt
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                    >
                      <img
                        src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg"
                        alt
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                    >
                      <img
                        src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg"
                        alt
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300"
                    >
                      <img
                        src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg"
                        alt
                        className="object-cover w-full lg:h-20"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="mb-8 ">
                  <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                    Hàng mới về
                  </span>
                  <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                    Giày Bata
                  </h2>
                  <div className="flex items-center mb-6">
                    <ul className="flex mr-2">
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                    <p className="text-xs dark:text-gray-400 ">
                      (đánh giá của 2 khách)
                    </p>
                  </div>
                  <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                    Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor
                    amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum
                    dor amet Lorem ispum dor amet Lorem ispum dor amet
                  </p>
                  <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                    <span>100.000đ</span>
                    {/* <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                        $1500.99
                      </span> */}
                  </p>
                  <p className="text-green-600 dark:text-green-300 ">
                    Số lượng còn lại : 7
                  </p>
                </div>
                <div className="flex items-center mb-8">
                  <h2 className="w-24 mr-6 text-xl font-bold dark:text-gray-400">
                    Màu sắc:
                  </h2>
                  <div className="flex flex-wrap -mx-2 -mb-2">
                    <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                      <div className="w-6 h-6 bg-cyan-300" />
                    </button>
                    <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                      <div className="w-6 h-6 bg-green-300 " />
                    </button>
                    <button className="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                      <div className="w-6 h-6 bg-red-200 " />
                    </button>
                  </div>
                </div>
                <div className="flex items-center mb-8">
                  <h2 className="w-36 text-xl font-bold dark:text-gray-400">
                    Kích thước:
                  </h2>
                  <div className="flex flex-wrap -mx-2 -mb-2">
                    <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">
                      XL
                    </button>
                    <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                      S
                    </button>
                    <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                      M
                    </button>
                    <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                      XS
                    </button>
                  </div>
                </div>
                <div className="w-32 mb-8 ">
                  <label
                    htmlFor
                    className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400"
                  >
                    Số lượng
                  </label>
                  <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                      <span className="m-auto text-2xl font-thin">-</span>
                    </button>
                    <input
                      type="number"
                      className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                      placeholder={1}
                    />
                    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center -mx-4 ">
                  <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                    <button className="flex items-center justify-center w-full p-4 text-indigo-500 border border-indigo-500 rounded-md dark:text-gray-200 dark:border-indigo-600 hover:bg-indigo-700 hover:border-indigo-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                  <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                    <button className="flex items-center justify-center w-full p-4 text-indigo-500 border border-indigo-500 rounded-md dark:text-gray-200 dark:border-indigo-600 hover:bg-indigo-700 hover:border-indigo-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                      Thêm vào  yêu thích
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PoloDetail;

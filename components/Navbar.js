import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {FaUserAlt} from 'react-icons/fa'

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">CodesWear</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/tshirts">
              <a className="mr-5 hover:text-white">Tshirts</a>
            </Link>
            <Link href="/hoodies">
              <a className="mr-5 hover:text-white">Hoodies</a>
            </Link>
            <Link href="/">
              <a className="mr-5 hover:text-white">Stickers</a>
            </Link>
            <Link href="/mugs">
              <a className="mr-5 hover:text-white">Mugs</a>
            </Link>
          </nav>
          <Link href="/login">
          <div
            className="user inline-flex items-center border-0   hover:bg-gray-700  mr-2 "
          >
            <FaUserAlt className="text-2xl" />
          </div>
          </Link>
          <div
            onClick={() => setShow(!show)}
            className="cart inline-flex items-center border-0   hover:bg-gray-700  right-0"
          >
            <AiOutlineShoppingCart className="text-4xl" />
          </div>
          {show && (
            <div
              className=" w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden sticky-0"
              id="chec-div"
            >
              <div
                className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
                id="checkout"
              >
                <div
                  className="flex md:flex-row flex-col justify-end"
                  id="cart"
                >
                  <div
                    className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                    id="scroll"
                  >
                    <div
                      className="flex items-center text-gray-700 hover:text-gray-700 cursor-pointer"
                      onClick={() => setShow(!show)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-left"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="15 6 9 12 15 18" />
                      </svg>
                      <p className="text-s pl-2 leading-none">Back</p>
                    </div>
                    <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
                      Bag
                    </p>
                    <ol>
                      {Object.keys(cart).length == 0 && (
                        <div>No items in the cart</div>
                      )}
                      {Object.keys(cart).map((k) => {
                        return (
                          <li key={k}>
                            <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                              <div className="w-1/2">
                                <img
                                  src="/tshirt.jpg"
                                  alt
                                  className="w-full h-full object-center object-cover"
                                />
                              </div>
                              <div className="md:pl-3 md:w-3/4">
                                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                                  {cart[k].itemCode}
                                </p>
                                <div className="flex items-center justify-between w-full pt-1">
                                  <p className="text-base font-black leading-none text-gray-800">
                                    {cart[k].name}
                                  </p>
                                  <span className="p-3  border border-gray-200 mr-6 focus:outline-none">
                                    {cart[k].qty}
                                  </span>
                                </div>
                                <p className="text-s leading-3 text-gray-900 py-4">
                                  Size: {cart[k].size}
                                </p>

                                <p className="text-s leading-3 text-gray-900 ">
                                  Color: {cart[k].variant}
                                </p>

                                <div className="flex items-center justify-between pt-5 pr-6">
                                  <div className="flex itemms-center">
                                    <button
                                      onClick={() => {
                                        removeFromCart(
                                          k,
                                          1,
                                          cart[k].price,
                                          cart[k].name,
                                          cart[k].size,
                                          cart[k].variant
                                        );
                                      }}
                                      className="text-xs leading-3 underline text-red-500  cursor-pointer"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                  <p className="text-base font-black leading-none text-gray-800">
                                    ₹{cart[k].price}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                  <div className=" md:w-1/3 xl:w-1/5 w-full bg-gray-100 h-full">
                    <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                      <div>
                        <p className="text-4xl font-black leading-9 text-gray-800">
                          Summary
                        </p>
                        <div className="flex items-center justify-between pt-16">
                          <p className="text-base leading-none text-gray-800">
                            Subtotal
                          </p>
                          <p className="text-base leading-none text-gray-800">
                            ₹{subTotal}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-5">
                          <p className="text-base leading-none text-gray-800">
                            Shipping
                          </p>
                          <p className="text-base leading-none text-gray-800">
                            ₹99
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                          <p className="text-2xl leading-normal text-gray-800">
                            Total
                          </p>
                          <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                            ₹{subTotal + 99}
                          </p>
                        </div>
                        <Link href="/checkout">
                          <button
                            onClick={() => setShow(!show)}
                            className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                          >
                            Checkout
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;

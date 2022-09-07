import React from "react";

const checkout = ({ cart, subTotal }) => {
  return (
    <>
      <div className="mt-20">
        <h1 className="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">
          Checkout Page
        </h1>
      </div>
      <div className="container p-12 mx-auto">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">
              Shipping Address
            </h2>
            <form
              className="justify-center w-full mx-auto"
              method="post"
              action
            >
              <div className="">
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Last Name
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="Email"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Email"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="Address"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Address
                    </label>
                    <textarea
                      className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="Address"
                      cols="20"
                      rows="4"
                      placeholder="Address"
                    ></textarea>
                  </div>
                </div>
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="city"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      City
                    </label>
                    <input
                      name="city"
                      type="text"
                      placeholder="City"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="postcode"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Pincode
                    </label>
                    <input
                      name="postcode"
                      type="text"
                      placeholder="Post Code"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">
                    Proceed To Pay
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
              <h2 className="text-xl font-bold">Order Summary</h2>
              <div className="mt-8">
                <div className="flex flex-col space-y-4">
                  <ol>
                    {Object.keys(cart).length == 0 && (
                      <div>No items in the cart</div>
                    )}
                    {Object.keys(cart).map((k) => {
                      return (
                        <li key={k}>
                          <div className="flex space-x-4">
                            <div>
                              <img
                                src="/tshirt.jpg"
                                alt="image"
                                className="w-60"
                              />
                            </div>
                            <div>
                              <h2 className="text-xl font-bold">{cart[k].name}</h2>
                              <p className="text-sm">
                               Size : {cart[k].size}
                              </p>
                              <p className="text-sm">
                               Colour : {cart[k].variant}
                              </p>
                              <span className="text-red-600">Price : </span> ₹{cart[k].price}
                            </div>
                            
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
             
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Subtotal<span className="ml-2">₹{subTotal}</span>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Shipping Tax<span className="ml-2">₹99</span>
              </div>
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total<span className="ml-2">₹{subTotal+99}</span>
              </div>
            </div>
          </div>
          {/* <div
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
                      className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                      
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
                      <p className="text-sm pl-2 leading-none">Back</p>
                    </div>
                    <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
                      Bag
                    </p>
                    <ol>
                      {Object.keys (cart).length==0 && <div>No items in the cart</div>}
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
                                  <span className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                                    {cart[k].qty}
                                  </span>
                                </div>
                                
                                <p className="text-xs leading-3 text-gray-600 py-4">
                                  Color: {cart[k].variant}
                                </p>
                               

                                <div className="flex items-center justify-between pt-5 pr-6">
                                  <div className="flex itemms-center">
                                    <button
                                      onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}
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
                  <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
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
                            {subTotal}
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
                          ₹{subTotal+99}
                          </p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default checkout;

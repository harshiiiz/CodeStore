import Image from "next/image";
import React from "react";
import Link from "next/link";
import mongoose from "mongoose";
import Product from "../models/Product";

const tshirts = ({ products }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((item) => {
            return (
              <Link
                key={item._id}
                passHref={true}
                href={`/product/${item.slug}`}
              >
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
                  <a className="block relative rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      width={640}
                      height={426}
                      src={item.img}
                    ></Image>
                  </a>

                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      TSHIRTS
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.title}
                    </h2>
                    <p className="mt-1">₹{item.price}</p>
                    <p className="mt-1">XL M S XXL</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "tshirt" });
  // console.log(products)
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}
export default tshirts;

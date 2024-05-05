"use client";

import { intanceAxios } from "@/services/apiConfig";
import { Products } from "@/types/productType";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductsById } from "@/app/server-components/generateStaticParams";


// const getProductsById = async (id: string) => {
//   const { data } = await intanceAxios.get<Products>(`/products/${id}`);
//   return data;
// };

const DetailProduct =   ({ params }: { params: { id: string } }) => {
  
  // const getProductsById = async (id: string) => {
  //   const { data } = await intanceAxios.get<Products>(`/products/${id}`);
  //   return data;
  // };
  // const data = await  getProductsById(params.id);

  // console.log("data 1", data);


  const [productData, setProductData] = useState<Products | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductsById(params.id);
        setProductData(data);
        console.log('Product data:', data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [params.id]);

  // const {
  //   title,
  //   description,
  //   thumbnail,
  //   price,
  //   rating,
  //   stock,
  //   brand,
  //   category,
  //   images,
  // } = data;

  return (
    <>
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <nav className="flex">
            <ol role="list" className="flex items-center">
              <li className="text-left">
                <div className="-m-1">
                  <Link
                    href="/"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  >
                    Home
                  </Link>
                </div>
              </li>

              <li className="text-left">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <Link
                      href="#"
                      className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    >
                      Products
                    </Link>
                  </div>
                </div>
              </li>

              <li className="text-left">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <Link
                      href="#"
                      className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                      aria-current="page"
                    >
                      {productData?.title}
                    </Link>
                  </div>
                </div>
              </li>
            </ol>
          </nav>

          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg">
                    <Image
                      className="object-cover"
                      src={productData?.thumbnail}
                      alt=""
                      width={500}
                      height={1000}
                    />
                  </div>
                </div>

                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                  <div className="flex flex-row items-start lg:flex-col">
                    {productData?.images.map((image: string, index: number) => (
                      <button
                        key={index}
                        type="button"
                        className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                      >
                        <Image
                          className="h-full w-full object-cover"
                          src={image}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                {productData?.title}
              </h1>

              <div className="mt-5 flex items-center">
                <div className="flex items-center">
                  <svg
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    fill="#eab308"
                    viewBox="0 0 36 36"
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <path d="M30.859 12.545c-0.168-0.506-0.637-0.864-1.189-0.864h-9.535l-2.946-9.067c-0.168-0.505-0.636-0.863-1.188-0.863-0.138 0-0.272 0.023-0.396 0.064l0.009-0.003c-0.376 0.13-0.664 0.427-0.779 0.8l-0.002 0.009-0.021-0.007-2.946 9.067h-9.534c-0.69 0-1.25 0.56-1.25 1.25 0 0.414 0.202 0.782 0.512 1.009l0.004 0.002 7.713 5.603-2.946 9.068c-0.039 0.116-0.061 0.249-0.061 0.387 0 0.69 0.56 1.25 1.25 1.25 0.276 0 0.531-0.089 0.738-0.241l-0.004 0.002 7.714-5.605 7.713 5.605c0.203 0.149 0.458 0.238 0.734 0.238 0.691 0 1.251-0.56 1.251-1.251 0-0.138-0.022-0.271-0.064-0.395l0.003 0.009-2.947-9.066 7.715-5.604c0.314-0.231 0.515-0.598 0.515-1.013 0-0.137-0.022-0.27-0.063-0.393l0.003 0.009zM20.486 18.057c-0.314 0.231-0.515 0.599-0.515 1.014 0 0.137 0.022 0.27 0.063 0.394l-0.003-0.009 2.039 6.271-5.336-3.877c-0.194-0.135-0.435-0.215-0.694-0.215-0.014 0-0.028 0-0.042 0.001l0.002-0v-14.589l2.037 6.272c0.169 0.505 0.637 0.863 1.189 0.863h6.596z"></path>{" "}
                    </g>
                  </svg>
                </div>
                <p className="ml-2 text-sm font-medium text-gray-500">
                  {productData?.rating}
                </p>
              </div>

              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                <p>{productData?.description}</p>
              </div>

              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                <p>
                  Category:{" "}
                  <span className="font-bold capitalize">{productData?.category}</span>
                </p>
              </div>

              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(productData?.price)}
                  </h1>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailProduct;

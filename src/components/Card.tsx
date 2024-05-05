import { addToCart } from "@/redux/slices/cartSlice";
import { AppDispatch } from "@/redux/store";
import { Products } from "@/types/productType";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const CardCompt = ({ dataProducts }: { dataProducts: Products[] }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = (product: Products) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <>
      <div className=" flex flex-col justify-center">
        <div className="grid grid-cols-3 gap-4">
          {dataProducts.products?.map((product: Products) => (
            <div
              className="relative bg-white shadow-md rounded-3xl p-2 mx-1 my-3"
              key={product.id}
            >
              <div className="overflow-x-hidden rounded-2xl relative">
                <Image
                  className="h-56 rounded-2xl w-full object-center object-cover"
                  src={product.thumbnail}
                  alt={product.title}
                  width={400}
                  height={200}
                />
                <p className="absolute right-2 top-2 bg-white shadow-xl rounded-full p-2 group leading-3">
                  <button
                    className="leading-0"
                    onClick={() => handleAddToCart(product)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 group-hover:opacity-50 opacity-70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
                </p>
              </div>
              <div className="mt-4 px-2 mb-2">
                <div>
                  <p className="text-lg font-semibold text-gray-900 mb-0">
                    {product.title}
                  </p>
                  <p className="text-sm text-gray-900 mb-4 h-16">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-md text-gray-800 mt-0">
                      ${product.price}
                    </p>
                    <Link
                      href={`/product/${product.id}`}
                      className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardCompt;

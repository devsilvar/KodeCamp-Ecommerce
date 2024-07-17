import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const ProductCard = ({ data, reviewStars, Loading }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Cart = useContext(ShopContext);
  let ProductQuantity = Cart.getProductQuantity(data.id);

  return (
    <div
      className="bg-white card m-3 h-fit shadow-2xl border-gray-300 rounded-lg"
      key={data.id}
    >
      <div className="relative">
        <img
          className="h-[300px] py-9 w-4/5 mx-auto hover:scale-110 transition duration-300"
          src={data.image}
          alt={data.title}
        />
        <span>
          <p className="bg-teal-300 text-center text-[12px] top-0 right-0 absolute w-1/3 px-1 py-1 rounded-sm text-white">
            {data.category}
          </p>
        </span>
      </div>
      <div className="w-5/6 mx-auto h-52 mt-7">
        <h2 className="font-bold text-lg">{data.title.substring(0, 34)}</h2>

        <p className="text-gray-500 mt-3">Price: ${data.price}</p>
        {/* <p className="bg-teal-300 text-[12px] px-2 py-1 text-white rounded-3xl">
          {item.category}
        </p> */}

        <div className=" flex gap-4  mt-2 items-center">
          <p>{reviewStars(Math.ceil(data.rating.rate))}</p>
          <p> ({Math.ceil(data.rating.rate)})</p>
        </div>
        <div className="flex justify-between">
          <div>
            {ProductQuantity > 0 ? (
              <div className="flex items-center gap-4 my-4">
                <button
                  onClick={() => Cart.removeCart(data.id)}
                  className="text-teal-600 rounded-full w-9 h-9 bg-gray-200 pb-1 text-2xl"
                >
                  -{" "}
                </button>

                <p>{ProductQuantity}</p>

                <button
                  onClick={() => Cart.AddCart(data.id)}
                  className="text-teal-600 rounded-full w-9 h-9 pb-1 bg-gray-200 text-2xl"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => Cart.AddCart(data.id)}
                className="bg-teal-800 hover:scale-110  transition-colors flex my-4 items-end text-white py-2 px-4 text-md lg:text-base  rounded-3xl"
              >
                Add to Cart
              </button>
            )}
          </div>
          <div>
            <Link to={`/ProductDetails/${data.id}`}>
              <button
                onClick={() => window.scrollTo(0, 0)}
                className="bg-gray-200 flex my-4 items-end text-teal-600 lg:text-base text-md py-2 px-4  rounded-3xl"
              >
                More Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

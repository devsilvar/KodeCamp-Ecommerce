import { useParams, useLocation } from "react-router-dom";
import FetchClientData from "./Utils/FetchClientData";
import { GetProduct } from "./Utils/GetProduct";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductCard from "../Components/ProductCard";
import { reviewStars } from "./Home";

// let ProdDetails;
// if (localStorage.products) {
//   //check if we have any students in the local storage
//   //if we have, send the data in the locastorge into the student variable
//   ProdDetails = JSON.parse(localStorage.getItem("products"));
// } else {
//   //if we do not have anything like student in out local storage/Database create a student array
//   Prod = [];
//   // create a databse location called Students
//   localStorage.setItem("products", JSON.stringify(Prod));
// }

const ProductDetails = ({ Product }) => {
  const { productId } = useParams();
  const { pathname } = useLocation();
  const { Products, loading, setloading } = FetchClientData();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   localStorage.setItem("products", JSON.stringify(Product));
  // }, [Products]);
  let prod = JSON.parse(localStorage.getItem("products"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [Product, setProduct] = useState(prod);
  const Cart = useContext(ShopContext);
  //const [Loading, setLoading] = useState(false);
  const id = Number(productId);

  let ProductQuantity = Cart.getProductQuantity(id);

  const Details = GetProduct(id);
  //const Details = Product.find((product) => product.id == Number(id));

  console.log(Details);

  return (
    <div id="#Details">
      <div className="w-5/6 lg:w-4/6 md:5/6 mx-auto pt-32">
        <div className="md:flex flex-row items-center gap-10 ">
          <img src={Details.image} alt="" width={400} height={300} />
          <div className="">
            <h2 className="text-4xl font-bold md:mt-1 mt-10">
              {Details.title}
            </h2>
            <p className="my-7 text-md capitalize">{Details.description}</p>
            <div className="flex items-center gap-4 my-4">
              <div className="flex gap-5 items-center">
                <button
                  onClick={() => Cart.removeCart(id)}
                  className="bg-teal-600 rounded-full w-9 h-9 text-gray-200 pb-1 text-2xl"
                >
                  -{" "}
                </button>

                <p>{ProductQuantity}</p>

                <button
                  onClick={() => Cart.AddCart(id)}
                  className="bg-teal-600 rounded-full w-9 h-9 pb-1 text-gray-200 text-2xl"
                >
                  +
                </button>
              </div>
            </div>
            <p className="text-2xl text-gray-600 my-10">
              <span className="font-bold">${Details.price} </span>{" "}
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-ellipsis text-center text-3xl mt-24">
        Related Products
      </h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 lg:w-5/6 w-full mx-auto mt-10">
        {Products.map((item, index) => {
          if (item.category == Details.category) {
            return (
              <ProductCard data={item} reviewStars={reviewStars} key={index} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductDetails;

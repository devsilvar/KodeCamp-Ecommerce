/* eslint-disable react/jsx-no-undef */
import { useContext } from 'react';
import ProductCard from '../Components/ProductCard';
import { ShopContext } from '../Context/ShopContext';
import Loader from '../Components/Modal';
import { AiFillStar } from 'react-icons/ai';
import Hero from '../Components/Hero';

export const reviewStars = (num) => {
  let stars = [];
  for (let i = 0; i < num; i++) {
    stars.push(<AiFillStar key={i} />);
  }

  return (
    <div
      className='flex  text-teal-500'
      key={new Date().toLocaleTimeString().toString()}
    >
      {stars}
    </div>
  );
};

function Home() {
  const Cart = useContext(ShopContext);
  if (Cart.Productss.length == 0) return undefined;
  return (
    <>
      {Cart.loading ? (
        <div className='mt-[300px]'>
          <Loader />
        </div>
      ) : (
        <>
          <Hero
            feauturedImg={Cart.Productss[0]}
            feauturedImg3={Cart.Productss[3]}
            feauturedImg4={Cart.Productss[4]}
            feauturedImg5={Cart.Productss[5]}
          />
          <div className='pt-24'>
            <section className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 md:w-5/5 lg:w-4/5 w-[90%] px-2s mx-auto'>
              {Cart.Productss.map((item, index) => {
                return (
                  <ProductCard
                    data={item}
                    {...item}
                    reviewStars={reviewStars}
                    key={index}
                  />
                );
              })}
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default Home;

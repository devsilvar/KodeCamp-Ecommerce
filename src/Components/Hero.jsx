import { Link } from 'react-router-dom';
import './hero.css';
const Hero = ({ feauturedImg }) => {
  return (
    <main className='hero-section gradient-bg pt-28 pb-16 flex justify-center items-center gap-16 font-Nunito'>
      <div>
        <h2 className='text-[4rem] font-bold'>Really !!!</h2>
        <p className='text-[1.5rem]  font-Nunito'>
          Make an Order for any of Our Products <br />
          and Get a 30% discount
        </p>
        <Link to={`/ProductDetails/${feauturedImg.id}`}>
          <button className='rounded-3xl font-Nunito bg-orange-500 fo px-5  py-3 my-4'>
            Make an Order
          </button>
        </Link>
      </div>
      <div>
        <img
          src={feauturedImg.image}
          alt='Image Section'
          className='w-[320px] f-img h-[350px]'
        />
      </div>
    </main>
  );
};

export default Hero;

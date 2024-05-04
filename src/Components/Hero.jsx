import { Link } from 'react-router-dom';
import './hero.css';
const Hero = ({ feauturedImg }) => {
  return (
    <main className='hero-section bg-slate-600 pt-28 pb-16 flex justify-center items-center gap-10'>
      <div>
        <h2 className='text-[4rem]'>Really</h2>
        <p className='text-[1.5rem]'>
          Make an Order for Out Cropped <br />
          TShirt and Get a 30% discount
        </p>
        <Link to={`/ProductDetails/${feauturedImg.id}`}>
          <button className='bg-orange-500 font-bold p-3 rounded-md my-4'>
            Make an Order
          </button>
        </Link>
      </div>
      <div>
        <img
          src={feauturedImg.image}
          alt='Image Section'
          className='w-[100%] h-[350px]'
        />
      </div>
    </main>
  );
};

export default Hero;

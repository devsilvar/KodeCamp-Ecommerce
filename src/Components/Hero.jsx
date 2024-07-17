import { Link } from 'react-router-dom';
import './hero.css';
const Hero = ({
  feauturedImg,
  feauturedImg3,
  feauturedImg4,
  feauturedImg5,
}) => {
  return (
    <main className='hero-section  h-[300px] md:h-[500px] gradient-bg flex flex-col lg:flex-row md:flex-row justify-center items-center gap-16 font-Nunito align-middle'>
      <div className=' leftsection ps-[10%] md:w-[90%] md:pt-16 pt-[64%]'>
        <h2 className='lg:text-[4rem] text-[2rem] font-bold '>
          Black Fridays !!!
        </h2>
        <p className='lg:text-[1.5rem] text-[0.8rem]  font-Nunito'>
          Make an Order for any of Our Products on a Fridays and Stand a Chance
          to Get a 30% discount
        </p>
        <Link to={`/ProductDetails/${feauturedImg.id}`}>
          <button className='rounded-3xl font-Nunito bg-orange-500 fo px-5 hover:bg-black hover:text-orange-400 text-sm w-[200px] py-3 my-4 text-[1rem] font-bold'>
            Make an Order
          </button>
        </Link>
      </div>
      <div className='rightsection flex flex-wrap p-5 items-center mt-16'>
        <div className='p-4 bg-white md:block lg:block hidden '>
          <img
            src={feauturedImg.image}
            alt='Image Section'
            className='w-[150px] f-img h-[150px]'
          />
        </div>

        <div className='p-4 bg-white md:block lg:block hidden'>
          <img
            src={feauturedImg3.image}
            alt='Image Section'
            className='w-[150px] f-img h-[150px]'
          />
        </div>
        <div className='p-4 bg-white md:hidden hidden xl:block'>
          <img
            src={feauturedImg4.image}
            alt='Image Section'
            className='w-[150px] f-img h-[150px]'
          />
        </div>

        <div className='p-4 bg-white md:hidden  hidden xl:block '>
          <img
            src={feauturedImg5.image}
            alt='Image Section'
            className='w-[150px] f-img h-[150px]'
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;

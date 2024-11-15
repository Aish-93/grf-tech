import React from 'react';
import './Carousel.css';
import quote1 from '../../icons/bgimg.png';

const Quote = () => {
  return (
    <div className='quote-container mt-4'>
      <div className='right-side-quote'>
        <p className='quote-text1 text-4xl leading-relaxed py-32'>
          We have years of experience in IT training and use <br />
          creative, personalized methods to help learners
          <br /> build strong tech skills, getting them <br />
          ready for the future.
        </p>
      </div>
    </div>
  );
};

export default Quote;

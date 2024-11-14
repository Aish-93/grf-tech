import React from 'react';
import bannerquote from '../../icons/quote.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner-img mt-5'>
      <img className='quote-img-banner' src={bannerquote} alt='' />
    </div>
  );
};

export default Banner;

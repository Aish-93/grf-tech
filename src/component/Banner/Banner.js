import React from 'react';
import bannerquote from '../../icons/bannertech.png';
import './Banner.css';

const Banner = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <div className='banner-img '>
        <img className='quote-img-banner' src={bannerquote} alt='' />
      </div>
    </div>
  );
};

export default Banner;

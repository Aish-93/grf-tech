import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Company.css';
import A from '../../icons/bupaLogo.png';
import B from '../../icons/capgemini.png';
import C from '../../icons/datamaticsLogo.png';
import D from '../../icons/digiThaneLogo.png';
import E from '../../icons/dtdcLogo.png';
import F from '../../icons/indianOilLogo.png';
import G from '../../icons/kirloskarLogo.jpg';
import H from '../../icons/meijerLogo.png';
import I from '../../icons/zentechLogo.png';
import J from '../../icons/rockstoneLogo.png';

const Company = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          background: 'black',
          borderRadius: '15px',
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: 'black', borderRadius: '15px' }}
        onClick={onClick}
      />
    );
  }

  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 5,
  //     slidesToScroll: 2,
  //     nextArrow: <SampleNextArrow />,
  //     prevArrow: <SamplePrevArrow />,
  //   };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className='slider-container mx-auto pt-4'>
      <Slider {...settings}>
        <div className='card-slick'>
          <div className='slick-img-container'>
            <img
              className='slick-image mx-auto my-auto '
              src={A}
              alt='card-slick-img1'
            />
          </div>
        </div>
        <div className='card-slick'>
          <div className='slick-img-container'>
            <img
              className='slick-image mx-auto my-auto'
              src={B}
              alt='card-slick-img2'
            />
          </div>
        </div>
        <div className='card-slick'>
          <div className='slick-img-container'>
            <img
              className='slick-image mx-auto my-auto'
              src={C}
              alt='card-slick-img3'
            />
          </div>
        </div>
        <div className='card-slick'>
          <div className='slick-img-container'>
            <img
              className='slick-image mx-auto my-auto'
              src={D}
              alt='card-slick-img4'
            />
          </div>
        </div>
        <div className='card-slick'>
          <div className='slick-img-container'>
            <img
              className='slick-image mx-auto my-auto'
              src={E}
              alt='card-slick-img5'
            />
          </div>
        </div>
        <div className='card-slick'>
          <div className='slick-img-container'>
            <img
              className='slick-image mx-auto my-auto'
              src={F}
              alt='card-slick-img6'
            />
          </div>
        </div>
        <div className='card-slick'>
          <div className='slick-img-container'>
            <img
              className='slick-image mx-auto my-auto'
              src={G}
              alt='card-slick-img7'
            />
          </div>
        </div>
        <div className='card-slick'>
          <div className='slick-img-container'>
            <img
              className='slick-image mx-auto my-auto'
              src={H}
              alt='card-slick-img8'
            />
          </div>
        </div>
        <div className='card-slick'>
          <div className='slick-img-container'>
            <img
              className='slick-image mx-auto my-auto'
              src={I}
              alt='card-slick-img9'
            />
          </div>
        </div>
        <div className='card-slick'>
          <div className='slick-img-container'>
            <img
              className='slick-image mx-auto my-auto'
              src={J}
              alt='card-slick-img10'
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Company;

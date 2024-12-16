import React from 'react';
import './WhyChooseUs.css';
import mentor from './../../icons/tutor.png';
import book from './../../icons/curriculum1.png';
import certificate from './../../icons/certificate.png';
import bestprice from './../../icons/price1.png';
import creative from './../../icons/creative.png';

const WhyChooseUs = () => {
  return (
    <div className='why-us-container mb-5 lg:pt-5'>
      <div className='top-container d-lg-flex justify-between mx-auto mb-4'>
        <div className='container-top-right'>
          <h3 className='lg:text-5xl font-semibold leading-snug'>
            Why we are best
            <br /> from others?
          </h3>
          <p className='text-gray-700 lg:text-sm p-1 mt-lg-4'>
            Discover the Difference — Join Us Today!
          </p>
          <button className='btn-our-best mt-lg-4 lg:text-sm'>Join Now</button>
        </div>
        <div className='container-top-left d-lg-flex justify-between'>
          <div className='why-choose-us-container p-3 rounded-xl'>
            <div className='our-best p-3'>
              <img src={mentor} alt='tutor' />
            </div>

            <h4 className='main-chooseus-points font-semibold mt-4'>
              Best Mentors
            </h4>
            <p className='para-our-best'>
              Our experts have years of industry experience. They provide
              hands-on, personalized guidance to help you master essential
              skills.
            </p>
          </div>
          <div className='why-choose-us-container p-3 rounded-xl'>
            <div
              className='our-best p-3'
              style={{
                backgroundColor: '#91E05E',
              }}
            >
              <img src={book} alt='tutor' />
            </div>

            <h4 className='main-chooseus-points font-semibold mt-4'>
              Best Curriculum
            </h4>
            <p className='para-our-best'>
              Our curriculum is designed to keep pace with the latest industry
              trends and best practices.
            </p>
          </div>
        </div>
      </div>
      <div className='d-lg-flex justify-between' style={{ width: '89vw' }}>
        <div
          className='certificate why-choose-us-container p-3 rounded-xl'
          // style={{
          //   marginLeft: '276px',
          // }}
        >
          <div
            className='our-best'
            style={{
              backgroundColor: '#5BB4F1',
            }}
          >
            <img
              className=''
              style={{
                width: '38px',
                height: '42px',
                paddingLeft: '12px',
                paddingTop: '12px',
              }}
              src={certificate}
              alt='tutor'
            />
          </div>

          <h4 className='main-chooseus-points font-semibold mt-4'>
            Certificate
          </h4>
          <p className='para-our-best'>
            Upon successful completion of our courses, you'll receive a
            recognized certificate that adds value to your resume.
          </p>
        </div>
        <div className='container-bottom-left bottom-rightside d-lg-flex lg:justify-between'>
          <div className='whychooseus-points'>
            <div className=' bestprice why-choose-us-container p-3 rounded-xl'>
              <div
                className='our-best p-1'
                style={{
                  backgroundColor: '#F77FB4',
                }}
              >
                {' '}
                <img
                  className=''
                  // style={{ width: '38px' }}
                  src={bestprice}
                  alt='tutor'
                />
              </div>

              <h4 className='main-chooseus-points font-semibold mt-4'>
                Best Price
              </h4>
              <p className='para-our-best'>
                Quality education should be accessible to all, so we offer
                courses at competitive prices without compromising quality.
              </p>
            </div>
          </div>
          <div
            className='bestprice why-choose-us-container p-3 rounded-xl'
            // style={{
            //   width: '18vw',
            //   height: '40vh',
            //   backgroundColor: '#fff',
            //   boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            // }}
          >
            <div
              className='our-best'
              style={{
                backgroundColor: '#F9A05B',
                paddingTop: '12px',
                paddingLeft: '12px',
              }}
            >
              {' '}
              <img style={{ width: '32px' }} src={creative} alt='tutor' />
            </div>

            <h4 className='main-chooseus-points font-semibold mt-4'>
              Creative Thinking
            </h4>
            <p className='para-our-best'>
              Our courses foster creative problem-solving, inspiring you to
              think beyond technical skills.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default WhyChooseUs;

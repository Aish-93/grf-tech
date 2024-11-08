import React from 'react';
import './Course.css';
import Button from 'react-bootstrap/Button';

const Course = () => {
  return (
    <div className='course-banner'>
      <div className='banner-container d-flex'>
        <div className='banner-left'>
          <h1 className='banner-heading text-start'>Graphene InfoTech</h1>
          <p className='mt-2'>Crafting the Future of Digital Innovation</p>
          <p className='banner-text text-start'>
            Unwrap new career skills.
            <br />
            Graphene InfoTech for INR 9,999.
          </p>
          <p></p>
          <div className='btn-container-banner d-flex justify-between'>
            <Button className='join-btn p-2' variant='light'>
              See Details
            </Button>
            <Button className='join-btn p-2' variant='primary'>
              Enroll now
            </Button>
          </div>
        </div>
        <div className='banner-right'>
          <div className='banner-inside'>
            <p className='actual-price'>
              <span className='striked-price'>₹ 19,999</span>
            </p>
            <p className='offered-price'>₹ 9,999</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;

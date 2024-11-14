import React from 'react';
import './Course.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import A from '../icons/freepik1.jpg';

const Course = () => {
  let navigate = useNavigate();

  return (
    <div className='course-banner mt-5 pt-2'>
      <div className='banner-container d-flex'>
        <div className='banner-left'>
          <h1 className='banner-heading text-start'>Graphene InfoTech</h1>
          {/* <p className='mt-2'> Crafting the Future of Digital Innovation</p> */}
          <p className='banner-text text-start'>
            Unlock new career opportunities.
            <br />
            Get started with Graphene InfoTech for just{' '}
            <span className='offered-price'>₹9,999 </span>
            <span className='actual-price'>
              <s>₹19,999</s>
            </span>
          </p>
          <p></p>
          <div className='btn-container-banner d-flex justify-between'>
            <Button
              className='join-btn1 p-2'
              // variant='outline-primary'
              onClick={() => navigate('/coursedetail')}
            >
              See Details
            </Button>
            <Button
              className='join-btn2 p-2'
              // variant='primary'
              onClick={() => navigate('/enrollment')}
            >
              Enroll now
            </Button>
          </div>
        </div>
        <div className='banner-right mx-5'>
          <img
            src={A}
            alt='amico'
            style={{ width: '32vw', height: '30vw', objectFit: 'contain' }}
          />
          {/* <div className='banner-inside'>
            <p className='actual-price'>
              <span className='striked-price'>₹ 19,999</span>
            </p>
            <p className='offered-price'>₹ 9,999</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Course;

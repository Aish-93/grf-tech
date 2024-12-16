import React from 'react';
import './Course.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
// import A from '../icons/freepik1.jpg';

const Course = () => {
  let navigate = useNavigate();

  return (
    <div className='course-banner py-auto'>
      <div className='banner-container d-lg-flex'>
        <div className='banner-sm-screen d-lg-none d-xl-none'>
          <img
            src='https://img.freepik.com/free-vector/tiny-programmers-big-laptop-writing-script-coders-app-developers-with-computers-flat-vector-illustration-programming-engineering-software-development-concept-banner-landing-web-page_74855-25360.jpg?uid=R139239883&ga=GA1.1.1110932627.1730523152&semt=ais_hybrid'
            alt='amico'
            style={{ height: '60vw', objectFit: 'contain' }}
          />
        </div>
        <div className='banner-left'>
          <p className='banner-text lg:text-start font-semibold'>
            Unlock new career opportunities.
            <br />
            Get started with Graphene InfoTech
            <br />
            for just <br />
            <span className='offered-price'>₹9,999 </span>
            <span className='actual-price'>
              <s>₹19,999</s>
            </span>
          </p>
          <p></p>
          <div className='btn-container-banner d-lg-flex lg:justify-between'>
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
              onClick={() => navigate('/enrollmentform')}
            >
              Enroll now
            </Button>
          </div>
        </div>
        <div className='banner-right mx-5 d-none d-lg-block '>
          <img
            src='https://img.freepik.com/free-vector/tiny-programmers-big-laptop-writing-script-coders-app-developers-with-computers-flat-vector-illustration-programming-engineering-software-development-concept-banner-landing-web-page_74855-25360.jpg?uid=R139239883&ga=GA1.1.1110932627.1730523152&semt=ais_hybrid'
            alt='amico'
            style={{ width: '32vw', height: '20vw', objectFit: 'contain' }}
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

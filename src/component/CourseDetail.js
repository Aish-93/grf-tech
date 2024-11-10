import React from 'react';
import './Course.css';
const CourseDetail = () => {
  return (
    <div className='mt-5'>
      <div>
        <div className='banner-course'></div>
        <h2 className='course-detail-heading mt-5'>HOW IT WORKS</h2>
        <div className='daywise-course-container d-flex justify-between flex-wrap mt-5'>
          <div className='course-detail-card ps-3 mb-5'>
            <button className='detail-btn1 mt-3 p-2 align-start'>Day 1</button>
            <h4 className='daywise-topic mt-3 text-start'>
              <span className='leading-10 text-2xl'>
                Introduction to Node.js
              </span>
              <br />
              <span className='text-2xl'> & VS Code</span>
            </h4>
            <p className='daywise-text text-start mt-3 text-lg'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia vel
              minima quam? Quasi, commodi quae!
            </p>
            <button className='detail-btn2'>Book a Call</button>
          </div>
          <div className='course-detail-card ps-3'>
            <button className='detail-btn1 mt-3 p-2 align-start'>Day 2</button>
            <h4 className='daywise-topic mt-3 text-start'>
              <span className='leading-10 text-2xl'>CSS</span>
            </h4>
            <p className='daywise-text text-start mt-3 text-lg'>
              Basics of CSS, Basics of HTML, Cards, Table, Header, Footer
            </p>
          </div>
          <div className='course-detail-card ps-3'>
            <button className='detail-btn1 mt-3 p-2 align-start'>Day 3</button>
            <h4 className='daywise-topic mt-3 text-start'>
              <span className='leading-10 text-2xl'>
                Forms and it's Validation
              </span>
              <br />
            </h4>
            <p className='daywise-text text-start mt-3 text-lg'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia vel
              minima quam? Quasi, commodi quae!
            </p>
          </div>
          <div className='course-detail-card ps-3 mb-5'>
            <button className='detail-btn1 mt-3 p-2 align-start'>Day 4</button>
            <h4 className='daywise-topic mt-3 text-start'>
              <span className='leading-10 text-2xl'>Introduction to API</span>
              <br />
            </h4>
            <p className='daywise-text text-start mt-3 text-lg'>
              Post API integration
            </p>
          </div>
          <div className='course-detail-card ps-3'>
            <button className='detail-btn1 mt-3 p-2 align-start'>Day 5</button>
            <h4 className='daywise-topic mt-3 text-start'>
              <span className='leading-10 text-2xl'>Redux Tools </span>
            </h4>
            <p className='daywise-text text-start mt-3 text-lg'>
              We will teach you state management tool Redux. also Prop Drilling
            </p>
          </div>
          <div className='course-detail-card ps-3'>
            <button className='detail-btn1 mt-3 p-2 align-start'>Day 6</button>
            <h4 className='daywise-topic mt-3 text-start'>
              <span className='leading-10 text-2xl'>Hooks Class-I</span>
              <br />
            </h4>
            <p className='daywise-text text-start mt-3 text-lg'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia vel
              minima quam? Quasi, commodi quae!
            </p>
          </div>
          <div className='course-detail-card ps-3 mb-5'>
            <button className='detail-btn1 mt-3 p-2 align-start'>Day 7</button>
            <h4 className='daywise-topic mt-3 text-start'>
              <span className='leading-10 text-2xl'>Hooks Class-II</span>
              <br />
            </h4>
            <p className='daywise-text text-start mt-3 text-lg'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia vel
              minima quam? Quasi, commodi quae!
            </p>
          </div>
          <div className='course-detail-card ps-3 mb-5'>
            <button className='detail-btn1 mt-3 p-2 align-start'>Day 8</button>
            <h4 className='daywise-topic mt-3 text-start'>
              <span className='leading-10 text-2xl'>
                Small Banking Project{' '}
              </span>
            </h4>
            <p className='daywise-text text-start mt-3 text-lg'>
              Basics of CSS, Basics of HTML, Cards, Table, Header, Footer
            </p>
          </div>
          <div className='course-detail-card ps-3'>
            <button className='detail-btn1 mt-3 p-2 align-start'>Day 9</button>
            <h4 className='daywise-topic mt-3 text-start'>
              <span className='leading-10 text-2xl'>Interview Questions</span>
              <br /> For React
            </h4>
            <p className='daywise-text text-start mt-3 text-lg'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia vel
              minima quam? Quasi, commodi quae!
            </p>
          </div>
          <div className='course-detail-card ps-3'>
            <button className='detail-btn1 mt-3 p-2 align-start'>Day 10</button>
            <h4 className='daywise-topic mt-3 text-start'>
              <span className='leading-10 text-2xl'>Final Project</span>
              <br />
            </h4>
            <p className='daywise-text text-start mt-3 text-lg'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia vel
              minima quam? Quasi, commodi quae!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

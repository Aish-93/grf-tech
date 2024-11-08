import React from 'react';
import './Course.css';
const CourseDetail = () => {
  return (
    <div>
      <div>
        <h2 className='course-detail-heading'>HOW IT WORKS</h2>
        <div className='daywise-course-container d-flex justify-between flex-wrap-3 mt-5'>
          <div className='course-detail-card ps-3'>
            <button className='detail-btn1 mt-3 p-2 align-start'>Day 1</button>
            <h4 className='daywise-topic mt-3 text-start'>
              Introduction to Node.js
              <br /> & VS Code
            </h4>
            <p className='daywise-text text-start mt-3'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia vel
              minima quam? Quasi, commodi quae!
            </p>
            <button className='detail-btn2 mt-4'>Book a Call</button>
          </div>
          <div className='course-detail-card ps-3'>
            <button className='detail-btn1 mt-3 p-2 align-start'>Day 2</button>
            <h4 className='daywise-topic mt-3 text-start'>CSS</h4>
            <p className='daywise-text text-start mt-3'>
              Basics of CSS, Basics of HTML, Cards, Table, Header, Footer
            </p>
          </div>
          <div className='course-detail-card ps-3'>
            <button className='detail-btn1 mt-3 p-2 align-start'>Day 3</button>
            <h4 className='daywise-topic mt-3 text-start'>
              Introduction to Node.js
              <br /> & VS-Code
            </h4>
            <p className='daywise-text text-start mt-3'>
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

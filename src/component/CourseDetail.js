import React, { useState } from 'react';
import './Course.css';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CourseDetail = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='mb-5'>
      <div>
        <div className='banner-course'></div>
        <h2 className='course-detail-heading mt-5 mx-auto  text-center'>
          HOW IT WORKS
        </h2>
        <div className='daywise-course-container d-flex justify-between flex-wrap mt-5'>
          <div className='course-detail-card ps-3 mb-5'>
            <button className='detail-btn1 mt-3 p-2 align-start'>
              Module-I
            </button>
            <h4 className='daywise-topic mt-3 text-start'>
              <span className='leading-10 text-2xl'>React Foundation</span>
              <br />
              {/* <span className='text-2xl'> & VS Code</span> */}
            </h4>
            <p className='daywise-text mt-3 text-lg px-2'>
              This module is designed for beginners who are new to the world of
              web development. It covers the core concepts of React, including
              components, JSX, hooks, and scenario based small projects.
            </p>
            <br />
            {/* <button className='detail-btn3'>See Details</button> */}
            <div>
              <button
                className='detail-btn3'
                // variant='primary'
                onClick={handleShow}
              >
                See Details
              </button>

              <Modal
                className='module-modal'
                size='lg'
                show={show}
                onHide={handleClose}
                aria-labelledby='example-modal-sizes-title-lg'
              >
                <Modal.Header closeButton>
                  <Modal.Title>Module-I React Foundation</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                  <ul className='d-flex justify-between flex-wrap'>
                    <li className='px-2'>Node Modules</li>
                    <li className='px-2'>HTML & Tags</li>
                    <li className='px-2'>CSS with examples</li>
                    <li className='px-2'>Responsive Designs</li>
                    <li className='px-2'>Animations</li>
                    <li className='px-2'>Array methods in React</li>
                    <li className='px-2'>React Hooks</li>
                    <li className='px-2'>Components</li>
                    <li className='px-2'>Operators</li>
                    <li className='px-2'>API Integration</li>
                    <li className='px-2'>Get method & map</li>
                    <li className='px-2'>Scenario Based Projects</li>
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <button variant='secondary' onClick={handleClose}>
                    Close
                  </button>
                  <button variant='primary' onClick={handleClose}>
                    Save Changes
                  </button>
                </Modal.Footer>
              </Modal>
            </div>{' '}
            <button className='detail-btn2'>Book a Call</button>
          </div>
          <div className='course-detail-card ps-3'>
            <button className='detail-btn1 mt-3 p-2 align-start'>
              Module-II
            </button>
            <h4 className='daywise-topic mt-3 text-start'>
              <span className='leading-10 text-2xl'>React Essentials</span>
            </h4>
            <p className='daywise-text mt-3 text-lg px-2'>
              This module is designed for those who already understand the
              basics and are ready to deepen their knowledge. You'll explore
              more advanced concepts like React hooks, lifecycle methods, and
              context API to manage complex state across your application.
            </p>
            {/* <button className='detail-btn3'>See Details</button> */}
            <div>
              <button
                className='detail-btn3'
                // variant='primary'
                onClick={handleShow}
              >
                See Details
              </button>

              <Modal
                className='module-modal'
                size='lg'
                show={show}
                onHide={handleClose}
                aria-labelledby='example-modal-sizes-title-lg'
              >
                <Modal.Header closeButton>
                  <Modal.Title>Module-II React Essentials</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                  <ul className='d-flex justify-between flex-sm-wrap'>
                    <li className='px-2'>Revision of HTML & CSS</li>
                    <li className='px-2'>Props</li>
                    <li className='px-2'>Context API</li>
                    <li className='px-2'>
                      Banking Example with redux implementation
                    </li>
                    <li className='px-2'>API calling in Redux</li>
                    <li className='px-2'>React Interview Questions</li>
                    <li className='px-2'>Projects</li>
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <button variant='secondary' onClick={handleClose}>
                    Close
                  </button>
                  <button variant='primary' onClick={handleClose}>
                    Save Changes
                  </button>
                </Modal.Footer>
              </Modal>
            </div>{' '}
            <button className='detail-btn2'>Book a Call</button>
          </div>
          <div className='course-detail-card ps-3'>
            <button className='detail-btn1 mt-3 p-2 align-start'>
              Module-III
            </button>
            <h4 className='daywise-topic mt-3 text-start'>
              <span className='leading-10 text-2xl'>React Advanced</span>
              <br />
            </h4>
            <p className='daywise-text mt-3 text-lg px-2'>
              This advanced module is tailored for developers who want to master
              React and build high-performance, scalable web apps. You'll dive
              deep into topics like custom hooks, React performance
              optimization, SSR, and integrating with APIs and external
              libraries.
            </p>
            {/* <button className='detail-btn3'>See Details</button> */}
            <div>
              <button
                className='detail-btn3'
                // variant='primary'
                onClick={handleShow}
              >
                See Details
              </button>

              <Modal
                className='module-modal'
                size='lg'
                show={show}
                onHide={handleClose}
                aria-labelledby='example-modal-sizes-title-lg'
              >
                <Modal.Header closeButton>
                  <Modal.Title>Module-III React Advanced</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                  <ul className='d-flex justify-between flex-wrap'>
                    <li className='px-2'>Login Authentication/Authorization</li>
                    <li className='px-2'>Props</li>
                    <li className='px-2'>Context API</li>
                    <li className='px-2'>
                      Banking Example with redux implementation
                    </li>
                    <li className='px-2'>API calling in Redux</li>
                    <li className='px-2'>React Interview Questions</li>
                    <li className='px-2'>Projects</li>
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <button variant='secondary' onClick={handleClose}>
                    Close
                  </button>
                  <button variant='primary' onClick={handleClose}>
                    Save Changes
                  </button>
                </Modal.Footer>
              </Modal>
            </div>
            <button className='detail-btn2 mb-2'>Book a Call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

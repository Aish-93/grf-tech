import React, { useState } from 'react';
import './Course.css';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CourseDetail = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='mb-5'>
      <div>
        <h2 className='banner-course-heading w-90'>REACT COURSE </h2>
        <div className='banner-course'></div>
        {/* <h2 className='course-detail-heading mt-5 mx-auto  text-center'>
          HOW IT WORKS
        </h2> */}
        <div className='daywise-course-container d-lg-flex justify-between flex-wrap mt-5'>
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
              web development.
              <br />
              <br />
            </p>
            <br />
            <Card style={{ width: '22rem' }} className='ms-2'>
              <ListGroup variant='flush'>
                <ListGroup.Item>Node Modules, VS Code</ListGroup.Item>
                <ListGroup.Item>HTML & Tags, CSS with examples</ListGroup.Item>
                <ListGroup.Item>Responsive Designs & Animations</ListGroup.Item>
                <ListGroup.Item>Array methods in React</ListGroup.Item>
                <ListGroup.Item>React Hooks, Components</ListGroup.Item>
                <ListGroup.Item>API Integration</ListGroup.Item>
                <ListGroup.Item>Get method & map</ListGroup.Item>
                <ListGroup.Item>Scenario Based Projects</ListGroup.Item>
              </ListGroup>
            </Card>
            {/* <button className='detail-btn2 mb-3'>Book a Call</button> */}
          </div>
          <div className='course-detail-card ps-3'>
            <button className='detail-btn1 mt-3 p-2 align-start '>
              Module-II
            </button>
            <h4 className='daywise-topic mt-3 text-start'>
              <span className='leading-10 text-2xl'>React Essentials</span>
            </h4>
            <p className='daywise-text mt-3 text-lg px-2'>
              This module is designed for those who already understand the
              basics and are ready to deepen their knowledge.
              {/* You'll explore
              more advanced concepts like React hooks, lifecycle methods, and
              context API to manage complex state across your application. */}
            </p>
            <br />
            <br />
            <Card style={{ width: '22rem' }} className='ms-2 mt-1'>
              {/* <Card.Header>Featured</Card.Header> */}
              <ListGroup variant='flush'>
                <ListGroup.Item>Revision of HTML & CSS</ListGroup.Item>
                <ListGroup.Item>Pre defined functions</ListGroup.Item>
                <ListGroup.Item>Loops</ListGroup.Item>
                <ListGroup.Item>Forms and validation</ListGroup.Item>
                <ListGroup.Item>Post API Integration</ListGroup.Item>
                <ListGroup.Item>State management tool-Redux</ListGroup.Item>
                <ListGroup.Item>Prop Drilling, React Hooks</ListGroup.Item>
                <ListGroup.Item>GET/POST Method Practise</ListGroup.Item>
              </ListGroup>
            </Card>

            {/* <button className='detail-btn2'>Book a Call</button> */}
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
              React and build high-performance, scalable web apps.
              {/* You'll dive
              deep into topics like custom hooks, React performance
              optimization, SSR, and integrating with APIs and external
              libraries. */}
            </p>
            {/* <button className='detail-btn3'>See Details</button> */}
            <br />
            <Card style={{ width: '22rem' }} className='ms-2'>
              {/* <Card.Header>Featured</Card.Header> */}
              <ListGroup variant='flush'>
                <ListGroup.Item>Login Authentication</ListGroup.Item>
                <ListGroup.Item>Login Authorization</ListGroup.Item>
                <ListGroup.Item>Props</ListGroup.Item>
                <ListGroup.Item>Context API</ListGroup.Item>
                <ListGroup.Item> Banking Example with redux</ListGroup.Item>
                <ListGroup.Item>API calling in Redux</ListGroup.Item>
                <ListGroup.Item>React Interview Questions</ListGroup.Item>
                <ListGroup.Item>Projects</ListGroup.Item>
              </ListGroup>
            </Card>
            {/* <div>
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
            </div> */}
            {/* <button className='detail-btn2 mb-2'>Book a Call</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

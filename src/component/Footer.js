import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Image } from 'react-bootstrap';
import logo from '../icons/giLogo.jpg';
import './Footer.css';
import A from '../icons/icons8-msg.png';
import B from '../icons/icons8-call.png';

function Footer() {
  return (
    <footer className='border-stone-500 border-solid'>
      {/* <div className="flex flex-col max-w-full justify-center items-center min-h-60 container mx-auto px-6 md:px-1 ">
        <div className="flex flex-col">
          <div className="flex listing">
          <a href="#home" className="text-gray-500 hover:text-black px-4 py-2">Home</a>
            <a href="#about" className="text-gray-500 hover:text-black px-4 py-2">About</a>
            <a href="#services" className="text-gray-500 hover:text-black px-4 py-2">Services</a>
            <a href="#contact" className="text-gray-500 hover:text-black px-4 py-2">Contact</a>
          </div>
        </div>
        <div className="flex flex-col">
        <div className="flex justify-center align-middle space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"  className="text-pink-600 hover:text-pink-800">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          
          </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm font-bold text-gray-500">
          <p>&copy; {new Date().getFullYear()} Graphene infoTech. All rights reserved.</p>
        </div>
        </div>
      </div> */}
      <div className='footer-block py-2 mt-5'>
        <div className='px-5 ul'>
          <div className=' py-4 d-flex justify-content-around'>
            <div
              style={{
                flexDirection: 'column',
              }}
              className='my-5 col-lg-3 col-md-12 col-sm-12 d-flex justify-content-md-center footer-info'
            >
              <h1>
                <span>
                  <Image
                    className='mx-auto footer-block-txt mb-2'
                    src={logo}
                    // onClick={() => {
                    //   navigate('/');
                    // }}
                    style={{ height: '80px', objectFit: 'cover' }}
                  />
                </span>
              </h1>
              <p
                className='text-center footer-block-txt my-2'
                style={{ fontSize: '15px' }}
              >
                We offer specialized training in React.js, HTML, CSS, and
                JavaScript, empowering learners with foundational skills for web
                development and frontend careers.
              </p>
              <div className='ps-5'>
                <div className='d-flex'>
                  <img style={{ width: '25px' }} src={A} />
                  <h6 className='mt-1 mx-3 footer-block-txt '>
                    +91 9575212142
                  </h6>
                </div>
                <div className='d-flex mt-2'>
                  <img style={{ width: '25px' }} src={B} />
                  <h6 className='text-center mt-1 mx-3 footer-block-txt '>
                    info@grapheneinfotech.com
                  </h6>
                </div>
              </div>
            </div>

            <div className='my-5 footer-links'>
              <h4
                className=' text-start footer-block-txt pb-1 page-title'
                style={{ fontSize: '22px' }}
              >
                QuickLinks
              </h4>
              <h5
                className='text-start footer-block-txt'
                style={{ fontSize: '16px' }}
              >
                About Us
              </h5>
              <h5
                className='text-start footer-block-txt'
                style={{ fontSize: '16px' }}
              >
                Contact Us
              </h5>

              {/* <h5
                className='text-start footer-block-txt'
                style={{ fontSize: '16px' }}
              >
                Product
              </h5> */}
              <h5
                className='text-start footer-block-txt '
                style={{ fontSize: '16px' }}
              >
                Blogs
              </h5>
            </div>
            <div className='my-5 footer-links'>
              <h4
                className='text-start footer-block-txt page-title'
                style={{ fontSize: '22px' }}
              >
                Help
              </h4>
              <h5
                className='text-start footer-block-txt'
                style={{ fontSize: '16px' }}
              >
                Payment Details
              </h5>

              <h5
                className='text-start footer-block-txt'
                style={{ fontSize: '16px' }}
              >
                FAQ's
              </h5>
            </div>
            <div className='my-5 footer-links'>
              <h4
                className='text-start footer-block-txt pb-1 page-title'
                style={{ fontSize: '22px' }}
              >
                Customer Policy
              </h4>
              <h5
                className='text-start footer-block-txt'
                style={{ fontSize: '16px' }}
              >
                Privacy Policy
              </h5>
              <h5
                className='text-start footer-block-txt'
                style={{ fontSize: '16px' }}
              >
                Terms & Conditions
              </h5>
            </div>
          </div>
        </div>
        <h5 className='text-center pt-3 pb-3 footer-block-txt'>
          @2024-2029 grapheneinfotech.com
        </h5>
      </div>
    </footer>
  );
}

export default Footer;

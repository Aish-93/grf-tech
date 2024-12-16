import React from 'react';
import certificateimg from './../../icons/GICertificate.png';
import stages from './../../icons/stages.png';
import './Certificate.css';
const Certificate = () => {
  return (
    <div className='certificate-container pt-5'>
      <h2 className='text-center lg:text-4xl font-semibold'>Certifications</h2>
      <div className='certificate-division d-lg-flex'>
        <div className='w-8/12'>
          <img
            className='certificate-img py-lg-5'
            src={certificateimg}
            alt=''
          />
        </div>
        <div className='certificate-para1 lg:w-8/12 ps-5 '>
          <p className='certificate-para2 lg:text-2xl mt-lg-5 py-lg-2'>
            A certificate from Graphene Infotech holds significant value due to
            the company’s strong industry reputation and focus on practical,
            hands-on training.
          </p>

          <p className='certificate-para3  lg:w-8/12 text-xl mt-4'>
            Those who clear the practical exams will get enrolled in a six-month
            internship program.
          </p>
          <img className='stages mt-4' src={stages} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Certificate;

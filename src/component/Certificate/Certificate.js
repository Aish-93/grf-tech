import React from 'react';
import certificateimg from './../../icons/GICertificate.png';
import stages from './../../icons/stages.png';
const Certificate = () => {
  return (
    <div className='pt-5'>
      <h2 className='text-center text-5xl font-semibold'>Certifications</h2>
      <div className='d-flex'>
        <div className='w-8/12'>
          <img className='w-10/12 ml-24 py-5' src={certificateimg} alt='' />
        </div>
        <div className='w-8/12 ps-5 '>
          <p className='text-2xl w-8/12 mt-5 py-2'>
            A certificate from Graphene Infotech holds significant value due to
            the company’s strong industry reputation and focus on practical,
            hands-on training.
          </p>

          <p className='w-8/12 text-xl mt-4'>
            Those who clear the practical exams will get enrolled in a six-month
            internship program.
          </p>
          <img className='w-8/12 mt-4' src={stages} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Certificate;

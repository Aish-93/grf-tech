import React from 'react';
import './Experts.css';

const Experts = () => {
  return (
    <div className='experts-container d-lg-flex'>
      <div className='experts-main lg:w-1/2 text-lg-center mt-4'>
        <h1 className='text-5xl font-semibold'>Our Experts</h1>
        <br />
        <p className='w-8/12 lg:ml-28 mt-lg-5 text-xl'>
          Attend our tech talks and expert lectures featuring professionals from
          diverse fields. Gain valuable insights, explore innovations, and
          expand your knowledge as they share experiences and expertise to
          inspire and empower your growth.
        </p>
      </div>

      <div class='experts'>
        <div class='bubble'>IIT</div>
        <div class='bubble'>PHD</div>
        <div class='bubble'>MS GERMANY</div>
        <div class='bubble'>IIM</div>
        <div class='bubble'>MS CANADA</div>
        <div class='bubble'>MS USA</div>
      </div>
    </div>
  );
};

export default Experts;

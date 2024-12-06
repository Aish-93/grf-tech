import React from 'react';
import './Experts.css';

const Experts = () => {
  return (
    <div className='d-flex m-5'>
      <div className='w-1/2 text-center mt-4'>
        <h1 className='text-5xl font-semibold'>Our Experts</h1>
        <br />
        <p className='w-8/12 ml-28 mt-5 text-xl'>
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

        {/* <div class='bubble'>MSc</div> */}
      </div>
    </div>
  );
};

export default Experts;

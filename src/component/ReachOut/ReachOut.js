import React from 'react';
import './ReachOut.css';

const ReachOut = () => {
  return (
    <div>
      <div class='pimg1 mx-auto text-center'>
        <br></br>
        <div className='' style={{ color: '#fff' }}>
          <h1 className='need-help-heading mt-5'>
            <span className='need-help'>Ne</span>ed{' '}
            <span className='need-help'>He</span>lp{' '}
            <span className='need-help'>?</span>
          </h1>
          <h4 className='page-titles'>Reach Out for Latest News</h4>
        </div>
        <div className=' pt-3'>
          <input
            style={{ border: 'none' }}
            className='py-3 px-lg-5 input-box'
            placeholder='Enter Email/Phone No'
          />
          <button
            style={{ border: 'none', fontWeight: '700' }}
            className='ms-2 py-3 px-5 button-26'
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;

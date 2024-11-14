import React from 'react';
import { Hcard } from './Constant';

const Hcards = () => {
  return (
    <div className='mt-5 grid gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-6 mx-5'>
      {Hcard.map((item, index) => (
        <a
          key={index}
          href='#'
          className='group flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
        >
          <img
            className='object-cover w-full h-64 rounded-t-lg group-hover:opacity-90 transition-opacity duration-300'
            src={item.image}
            alt={item.title}
          />
          <div className='flex flex-col justify-between p-4 leading-normal space-y-3'>
            <h5 className='text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors duration-300'>
              {item.title}
            </h5>
            <p className='text-gray-700 dark:text-gray-400 group-hover:text-gray-900 transition-colors duration-300'>
              {item.desc}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Hcards;

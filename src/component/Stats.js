import React, { useEffect, useState } from 'react';
import useIntervalCounter from './useIntervalCounter';

const Stats = () => {
  const count5 = useIntervalCounter(0, 10, 500);
  const count10 = useIntervalCounter(0, 500, 10);
  const count50 = useIntervalCounter(0, 80, 50);

  const stats = [
    { id: 1, name: 'Years of Experience', value: count10 + '+' },
    { id: 2, name: 'Students were trained', value: count5 + '+' },
    { id: 3, name: 'Projects done', value: count50 + '+' },
  ];
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCount((prev) => {
  //         if (prev >= 500) {
  //           clearInterval(interval);
  //           return prev;
  //         }
  //         return prev + 1;
  //       });

  //     },50);
  //     return () => clearInterval(interval);
  //   },[]);

  return (
    <div className='counter-section-container rounded-3xl sm:py-10'>
      <div className=' counter-section mx-auto max-w-7xl lg:px-8'>
        <dl className='counter grid grid-cols-1 text-center lg:grid-cols-3'>
          {stats.map((stat) => (
            <div
              key={stat.id}
              className='mx-auto flex flex-col lg:gap-y-4  sm:gap-y-6'
            >
              <dt className='stats-text pt-2 text-base/7 text-gray-800 "Roboto Serif", sans-serif'>
                {stat.name}
              </dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-gray-800 sm:text-5xl'>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;

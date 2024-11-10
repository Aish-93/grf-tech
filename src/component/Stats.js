import React, { useEffect, useState } from 'react';

const stats = [
  { id: 1, name: 'Years of Experience', value: '10+' },
  { id: 2, name: 'Students were trained', value: '500+' },
  { id: 3, name: 'Projects done', value: '50+' },
];
const Stats = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 500) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
      
    },50);
    return () => clearInterval(interval);
  },[]);
  return (
    <div className='counter-section mx-auto rounded-3xl bg-blue-900 sm:py-16'>
      <div className='mx-auto max-w-6xl px-5 lg:px-8'>
        <dl className='counter grid grid-cols-1 text-center lg:grid-cols-3'>
          {stats.map((stat) => (
            <div
              key={stat.id}
              className='mx-auto flex max-w-xs flex-col gap-y-4'
            >
              <dt className='stats-text text-base/7 text-gray-800 "Roboto Serif", sans-serif'>
                {stat.name}
                {count}
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

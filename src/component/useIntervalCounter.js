import { useState, useEffect } from 'react';

function useIntervalCounter(initialValue, updateInterval, maxCount) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= maxCount) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, updateInterval);

    return () => clearInterval(interval);
  }, [maxCount, updateInterval]);

  return count;
}

export default useIntervalCounter;

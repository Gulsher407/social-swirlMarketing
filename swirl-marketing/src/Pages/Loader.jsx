import React, { useState, useEffect, useRef } from 'react';

function Loader() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([
    { name: 'Projects', value: 0 },
    { name: 'Happy Clients', value: 0 },
    { name: 'Awards Wins', value: 0 },
    { name: 'Countries', value: 0 }
  ]);
  const targetValues = [126, 63, 18, 27]; // Adjust the target values as needed
  const loaderRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when at least 50% of the component is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timers = targetValues.map((targetValue, index) => {
        return setInterval(() => {
          setCounters(prevCounters => {
            const newCounters = [...prevCounters];
            if (newCounters[index].value < targetValue) {
              newCounters[index].value++;
            } else {
              clearInterval(timers[index]);
            }
            return newCounters;
          });
        }, 60); 
      });

      return () => {
        timers.forEach(timer => clearInterval(timer));
      };
    }
  }, [isVisible]);

  return (
    <div className='text-white flex justify-center max-w-[1250px] mx-auto py-10 flex-wrap' ref={loaderRef}>
      {counters.map((counter, index) => (
        <div key={index} className="text-center p-10 border-red-700 w-full lg:w-1/4">
          <div className='text-4xl font-semibold p-4'>{counter.value}</div>
          <div className='text-lg p-4 mt-2'>{counter.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Loader;

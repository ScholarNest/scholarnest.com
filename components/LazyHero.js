import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import classes from './style/LazyHero.module.css'; // Import your CSS module

const DynamicComponent = dynamic(() => import('./Hero'), {
  loading: () => <p>Loading...</p>,
});

const LazyHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${classes.page} ${isVisible ? classes.visible : ''}`}>
      <DynamicComponent />
    </div>
  );
};

export default LazyHero;

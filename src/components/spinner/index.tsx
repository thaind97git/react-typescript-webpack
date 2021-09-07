import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="loading-element">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>
  );
};

export default Spinner;

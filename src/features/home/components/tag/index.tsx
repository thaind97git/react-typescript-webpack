import React from 'react';
import { ITag } from '../../types';

const HomeTag: React.FC<ITag> = ({ color, label }) => {
  return (
    <span
      style={color ? { background: color } : {}}
      className="home-tag label-item info"
    >
      {label}
    </span>
  );
};

export default HomeTag;

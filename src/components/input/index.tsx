import React from 'react';

interface IProps {
  label?: string;
  required?: boolean;
  name?: string;
}
const Input: React.FC<IProps> = ({ label, required, name, ...others }) => {
  return (
    <div className="form-control">
      {label && <label htmlFor={name}>Password</label>}
      <input name={name} required={required} {...others} />
    </div>
  );
};

export default Input;

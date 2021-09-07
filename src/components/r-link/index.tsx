import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  to: string;
  prefix?: any;
  suffix?: any;
  children: JSX.Element | string;
  className?: string;
}

const RLink: React.FC<IProps> = ({
  to,
  prefix,
  suffix,
  children,
  className,
  ...others
}) => {
  const wrapClasses = ['r-link', className].filter(Boolean).join(' ');

  return (
    <Link className={wrapClasses} to={to} {...others}>
      {prefix && <span className="prefix">{prefix}</span>}
      {children}
      {suffix && <span className="suffix">{suffix}</span>}
    </Link>
  );
};

export default RLink;

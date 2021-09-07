import React, { ReactElement } from 'react';

interface IBtnProps {
  primary?: boolean;
  danger?: boolean;
  warning?: boolean;
}
const getBtnStringType = (props: IBtnProps): string => {
  const { primary, danger, warning } = props;

  switch (true) {
    case primary:
      return 'primary';
    case danger:
      return 'danger';
    case warning:
      return 'warning';
    default:
      return 'default';
  }
};

interface IProps extends IBtnProps {
  children: ReactElement | string;
}

const Button: React.FC<IProps & React.HTMLAttributes<HTMLButtonElement>> = ({
  primary,
  danger,
  warning,
  children,
  ...others
}) => {
  const btnClass = [getBtnStringType({ primary, danger, warning })].join(' ');

  return (
    <button className={`btn btn-${btnClass}`} {...others}>
      {children}
    </button>
  );
};

export default Button;

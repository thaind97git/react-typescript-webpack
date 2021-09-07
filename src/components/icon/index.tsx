import React from 'react';

interface ISizeProps {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

const getIconSizeByType = ({ small, medium, large }: ISizeProps) => {
  switch (true) {
    case small:
      return 16;
    case medium:
      return 24;
    case large:
      return 32;
    default:
      return 24;
  }
};

interface IProps extends ISizeProps {
  src: string;
  className?: string;
  style?: object;
  others?: Array<unknown>;
}

const Icon: React.FC<IProps & React.HTMLAttributes<HTMLImageElement>> = ({
  src,
  small,
  medium,
  large,
  className = '',
  style = {},
  ...others
}) => {
  if (!src) {
    return null;
  }
  const iconClasses = ['icon', className].join(' ');
  const iconSize = getIconSizeByType({ small, medium, large });
  const iconStyles = Object.assign(
    {},
    {
      width: iconSize,
      height: iconSize,
    },
    style,
  );
  return (
    <img src={src} className={iconClasses} style={iconStyles} {...others} />
  );
};

export default Icon;

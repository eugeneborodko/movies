import { FC, ReactNode, useState } from 'react';
import classes from './Icon.module.css';

interface IconProps {
  width: number;
  height: number;
  viewBox: string;
  children: ReactNode;
}

const Icon: FC<IconProps> = ({ width, height, viewBox, children }) => {
  const [color, setColor] = useState<string>('#ffffff');

  const changeColor = (color: string) => {
    return () => {
      setColor(color);
    };
  };

  return (
    <svg
      className={classes.icon}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      onMouseEnter={changeColor('#d83f3f')}
      onMouseLeave={changeColor('#ffffff')}
    >
      <g fill={color}>{children}</g>
    </svg>
  );
};

export default Icon;

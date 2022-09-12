import { FC, ReactNode } from 'react';
import classes from './Button.module.css';

interface ButtonProps {
  color: 'primary' | 'secondary';
  ariaLabel: string;
  children: ReactNode;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  color,
  ariaLabel,
  children,
  onClick,
  ...props
}) => {
  const buttonClassName = [classes.button, classes[color]].join(' ');

  return (
    <button
      className={buttonClassName}
      type="button"
      color={color}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

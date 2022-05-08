import * as React from 'react';
import './Button.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

type PrimaryButtonProps = {
  primary?: boolean;
  secondary?: never;
};

type SecondaryButtonProps = {
  primary?: never;
  secondary?: boolean;
};

const Button = (props: Props & (PrimaryButtonProps | SecondaryButtonProps)) => {
  const { children, className, primary = true } = props;
  const cls = primary ? 'primary' : 'secondary';

  return (
    <button {...props} className={`${cls} ${className}`}>
      {children}
    </button>
  );
};

export default Button;

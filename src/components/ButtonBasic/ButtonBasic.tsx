import * as React from 'react';
import './ButtonBasic.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

type PrimaryButtonProps = {
  primary?: boolean;
  secondary?: never;
};

type SecondaryButtonProps = {
  primary?: never;
  secondary?: boolean;
};

const ButtonBasic = (
  props: Props & (PrimaryButtonProps | SecondaryButtonProps),
) => {
  const {
    children,
    className,
    primary = true,
    secondary = false,
    ...restOfProps
  } = props;

  const cls = primary && !secondary ? 'primary' : 'secondary';

  return (
    <button {...restOfProps} className={`buttonBasic ${cls} ${className}`}>
      {children}
    </button>
  );
};

export default ButtonBasic;

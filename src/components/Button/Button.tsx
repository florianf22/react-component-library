import * as React from 'react';
import './Button.css';

interface Props {
  label: string;
}

const Button = (props: Props) => {
  const { label } = props;

  return <button>{label}</button>;
};

export default Button;

import * as React from 'react';

interface Props {
  label: string;
}

const Button = (props: Props) => {
  const { label } = props;

  return <button>{label}</button>;
};

export default Button;

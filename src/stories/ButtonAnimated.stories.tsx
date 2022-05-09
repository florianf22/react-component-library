import React from 'react';
import { ButtonAnimated } from '../components';

//@ts-ignore
export default {
  title: 'ButtonAnimated',
  component: ButtonAnimated,
};

// const Template = (args: any) => <ButtonAnimated {...args} />;

export const slide = () => <ButtonAnimated label="Let's go" type="slide" />;

export const circle = () => <ButtonAnimated label="Let's go" type="circle" />;

export const underline = () => (
  <ButtonAnimated label="Let's go" type="underline" />
);

export const translate = () => (
  <ButtonAnimated label="Let's go" type="translate" />
);

export const spin = () => <ButtonAnimated label="Let's go" type="spin" />;

// export const secondary = () => <ButtonAnimated secondary>Add to cart</ButtonAnimated>;

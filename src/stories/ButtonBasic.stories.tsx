import React from 'react';
import { ButtonBasic } from '../components';

//@ts-ignore
export default {
  title: 'ButtonBasic',
  component: ButtonBasic,
};

// const Template = (args: any) => <ButtonBasic {...args} />;

export const primary = () => <ButtonBasic>Add to cart</ButtonBasic>;

export const secondary = () => <ButtonBasic secondary>Add to cart</ButtonBasic>;

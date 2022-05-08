import React from 'react';
import { Button } from '../components';

//@ts-ignore
export default {
  title: 'Button',
  component: Button,
};

const Template = (args: any) => <Button {...args} />;

export const primary = () => <Button>Press me</Button>;

export const secondary = () => <Button secondary>Press me</Button>;

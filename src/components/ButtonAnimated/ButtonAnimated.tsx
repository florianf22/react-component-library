import * as React from 'react';
import './ButtonAnimated.css';

const classNamesObj = {
  slide: {
    inner: 'ButtonAnimated-Slide',
    outer: 'ButtonAnimated-SlideWrapper',
  },
  circle: {
    inner: 'ButtonAnimated-Circle',
    outer: 'ButtonAnimated-CircleWrapper',
  },
  underline: {
    inner: 'ButtonAnimated-Underline',
    outer: 'ButtonAnimated-UnderlineWrapper',
  },
  translate: {
    inner: 'ButtonAnimated-Translate',
    outer: 'ButtonAnimated-TranslateWrapper',
  },
  spin: {
    inner: 'ButtonAnimated-Spin',
    outer: 'ButtonAnimated-SpinWrapper',
  },
} as const;

interface Props extends React.HTMLProps<HTMLDivElement> {
  label: string;
  type: 'slide' | 'circle' | 'underline' | 'translate' | 'spin';
  background?: string;
  color?: string;
  hoverColor?: string;
}

const ButtonAnimated = (props: Props) => {
  const {
    label,
    type,
    background = '#bfc0c0',
    color = '#bfc0c0',
    hoverColor = '#2d3142',
    className,
    ...restOfProps
  } = props;

  const existingColorValue =
    document.documentElement.style.getPropertyValue('--color');
  const existingHoverColorValue =
    document.documentElement.style.getPropertyValue('--hover-color');

  if (color && color !== existingColorValue) {
    document.documentElement.style.setProperty('--color', color);
  }

  if (hoverColor && hoverColor !== existingHoverColorValue) {
    document.documentElement.style.setProperty('--hover', hoverColor);
  }

  return (
    <div
      {...restOfProps}
      className={`ButtonAnimated-Wrapper ${classNamesObj[type].outer} ${className}`}
      style={{ borderColor: background }}
    >
      <div
        className={`${classNamesObj[type].inner}`}
        style={{ background }}
      ></div>
      <div className="ButtonAnimated-LinkWrapper">
        <a className="ButtonAnimated-Link">{label}</a>
      </div>
    </div>
  );
};

export default ButtonAnimated;

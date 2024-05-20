type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export const colors = {
  transparent: 'transparent',
  black: '#000000',
  gray1000: '#191919',
  gray900: '#323232',
  gray800: '#4B4B4B',
  gray700: '#646464',
  gray600: '#7D7D7D',
  gray500: '#969696',
  gray400: '#AFAFAF',
  gray300: '#C8C8C8',
  gray200: '#E1E1E1',
  gray100: '#FAFAFA',
  white: '#FFFFFF',

  hyperlink: '#007AFF',
  error: '#F25858',
  hoverLayer: 'rgba(0,0,0,0.2)',
  focusLayer: 'rgba(255,255,255,0.2)',
  boxShadow: 'rgba(255,255,255,0.1)',
} as const;

export type Color = keyof typeof colors;

export type CustomColor = keyof typeof colors | RGB | RGBA | HEX | 'transparent';

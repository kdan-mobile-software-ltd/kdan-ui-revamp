export const BREAKPOINTS = {
  desktop: '1920px',
  desktopS: '1440px',
  laptop: '1279px',
  tablet: '1023px',
  mobile: '767px',
  mobileM: '440px',
} as const;

export type Breakpoints = keyof typeof BREAKPOINTS;
export type BreakpointsWithDefault = Breakpoints | 'default';

export const MAX_WIDTH_QUERY = {
  desktop: `max-width: ${BREAKPOINTS.desktop}`,
  desktopS: `max-width: ${BREAKPOINTS.desktopS}`,
  laptop: `max-width: ${BREAKPOINTS.laptop}`,
  tablet: `max-width: ${BREAKPOINTS.tablet}`,
  mobile: `max-width: ${BREAKPOINTS.mobile}`,
  mobileM: `max-width: ${BREAKPOINTS.mobileM}`,
};

export type BreakpointKeyObj<T> = Partial<Record<BreakpointsWithDefault, T>>;

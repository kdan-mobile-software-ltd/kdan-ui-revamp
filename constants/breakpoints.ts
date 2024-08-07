export const BREAKPOINTS = {
  desktop: '1920px',
  laptop: '1279px',
  tablet: '1023px',
  mobile: '767px',
} as const;

export type Breakpoints = keyof typeof BREAKPOINTS;
export type BreakpointsWithDefault = Breakpoints | 'default';

export const MAX_WIDTH_QUERY = {
  desktop: `max-width: ${BREAKPOINTS.desktop}`,
  laptop: `max-width: ${BREAKPOINTS.laptop}`,
  tablet: `max-width: ${BREAKPOINTS.tablet}`,
  mobile: `max-width: ${BREAKPOINTS.mobile}`,
};

export type BreakpointKeyObj<T> = Partial<Record<BreakpointsWithDefault, T>>;

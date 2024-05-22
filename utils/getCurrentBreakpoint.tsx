import { BREAKPOINTS, BreakpointsWithDefault } from '@/constants/breakpoints';

export const getCurrentBreakpoint = (windowWidth: number): BreakpointsWithDefault => {
  const smallToLargeBreakpoint = Object.keys(BREAKPOINTS).reverse() as BreakpointsWithDefault[];
  return smallToLargeBreakpoint
    .find((breakpoint) => windowWidth <= Number.parseInt(BREAKPOINTS[breakpoint], 10)) || 'default';
};

import { getCurrentBreakpoint } from '@/utils/getCurrentBreakpoint';

describe('utils/getCurrentBreakpoint', () => {
  test('Should return `tablet` breakpoint at width of `1000px`', () => {
    expect(getCurrentBreakpoint(1000)).toBe('tablet');
  });
  test('Should return `mobile` breakpoint at width of `300px`', () => {
    expect(getCurrentBreakpoint(300)).toBe('mobile');
  });
});

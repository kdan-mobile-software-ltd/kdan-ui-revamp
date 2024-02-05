import { Breakpoints } from '../breakpoints';

export type BreakpointKeyObj<T> = Partial<Record<Breakpoints | 'default', T>>;

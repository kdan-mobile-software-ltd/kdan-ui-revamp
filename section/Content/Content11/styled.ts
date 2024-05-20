import styled from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { RwdWrapper } from '@/utils/style/wrapper';
import { LayoutNumbersOfColumn } from './types';

export const GroupWrapper = styled(RwdWrapper)<LayoutNumbersOfColumn>`
  display: grid;
  grid-template-columns: repeat(${({ numbersOfColumn }) => numbersOfColumn || 3}, 1fr);
  gap: 48px 0;

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    gap: 40px;
  }

  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    max-width: 400px;
    grid-template-columns: 1fr;
  }
`;

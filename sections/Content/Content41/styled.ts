import styled from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { RwdWrapper } from '@/utils/style/wrapper';
import { LayoutNumbersOfColumn } from '@/constants/types/global';

export const GroupWrapper = styled(RwdWrapper)<LayoutNumbersOfColumn>`
  display: grid;
  grid-template-columns: repeat(${({ numbersOfColumn }) => numbersOfColumn || 3}, 1fr);

  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    grid-template-columns: 1fr;
  }
`;

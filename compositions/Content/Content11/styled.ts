import { Typography } from '@/components/Typography';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import styled from 'styled-components';
import { LayoutNumberOfRow } from './types';

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Desc = styled(Typography)`
  -webkit-line-clamp: 5; /* number of lines to show */
  line-clamp: 5; 
`;

export const GroupWrapper = styled.div<LayoutNumberOfRow>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({ numberOfRow }) => numberOfRow || 3}, 1fr);
  gap: 48px 60px;

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    gap: 40px;
  }
`;

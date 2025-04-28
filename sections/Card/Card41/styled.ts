import styled from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';

export const GroupWrapper = styled.div`
  display: flex;
  gap: 36px; // 60-24(card margin for shadow)
  padding: 0 60px;

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    padding: 0;
  }
`;

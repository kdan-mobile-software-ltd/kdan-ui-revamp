import styled from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';

export const GroupWrapper = styled.div`
  display: flex;
  gap: 60px;
  padding: 0 40px;

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    padding: 0 24px;
  }
`;

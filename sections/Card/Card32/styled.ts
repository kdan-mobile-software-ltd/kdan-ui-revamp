import styled from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';

export const GroupWrapper = styled.div`
  display: flex;
  align-items: stretch;
  gap: 60px;
  padding: 64px 40px;

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    padding: 40px 40px 104px;
  }

  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    padding: 40px 40px 64px;
  }
`;

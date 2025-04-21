import styled from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';

export const GroupWrapper = styled.div`
  display: flex;
  gap: 60px;
  padding: 12px 90px;

  @media screen and (${MAX_WIDTH_QUERY.desktopS}) {
    padding: 12px 70px;
  }

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    padding: 12px 16px;
  }
`;

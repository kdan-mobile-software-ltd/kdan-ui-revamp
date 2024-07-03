import styled from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';

export const RwdWrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: auto;
  @media screen and (${MAX_WIDTH_QUERY.laptop}) {
    max-width: 944px;
  }
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    max-width: 688px;
  }
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    max-width: 512px; // max-width: 480px (UI design with content-box)
    padding-left: 16px;
    padding-right: 16px;
  }
`;

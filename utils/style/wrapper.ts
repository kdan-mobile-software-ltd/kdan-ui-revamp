import styled from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { CustomCssPropsType } from '@/constants/types/styled';

export const RwdWrapper = styled.div<CustomCssPropsType>`
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

  ${({ customCss }) => customCss}
`;

export const HardRwdWrapper = styled.div<CustomCssPropsType>`
  width: 1080px;
  margin: auto;
  @media screen and (${MAX_WIDTH_QUERY.laptop}) {
    width: 944px;
  }
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    width: 688px;
  }
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    max-width: 512px;
    width: calc(100% - 32px);
    margin-left: 16px;
    margin-right: 16px;
  }

  ${({ customCss }) => customCss}
`;

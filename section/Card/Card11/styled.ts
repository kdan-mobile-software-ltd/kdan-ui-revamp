import styled, { css } from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { HideAtMobilePropsType } from '@/constants/types/styled';

export const Wrapper = styled.div`
  text-align: center;
`;
export const ContentWrapper = styled.div<{ isThreeColumns: boolean } & HideAtMobilePropsType>`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  /* control column numbers by max-width */
  ${({ isThreeColumns }) => css`
    max-width: ${isThreeColumns ? '944px' : '1080px'};
    @media screen and (${MAX_WIDTH_QUERY.laptop}) {
      max-width: ${isThreeColumns ? '944px' : '688px'};
    }
    @media screen and (${MAX_WIDTH_QUERY.tablet}) {
      max-width: 688px;
    }
    @media screen and (${MAX_WIDTH_QUERY.mobile}) {
      max-width: 480px;
      padding-left: 16px;
      padding-right: 16px;
    }
  `}
`;

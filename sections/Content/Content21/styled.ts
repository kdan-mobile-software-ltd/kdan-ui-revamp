import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { RwdWrapper } from '@/utils/style/wrapper';
import styled, { css } from 'styled-components';

export const GroupWrapper = styled(RwdWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px 60px;

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    gap: 40px;
  }
`;

export const ItemWrapper = styled.div<{ isReverse: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  ${({ isReverse }) => isReverse && css`flex-direction: row-reverse;`}
  gap: 48px 64px;

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    gap: 40px;
  }
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    flex-direction: column;
  }
`;

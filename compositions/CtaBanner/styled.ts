import styled from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { BackgroundColorPropsType, ThemePropsType } from '@/constants/types/styled';
import { getCustomColorFromTheme } from '@/utils/style';
import { RwdWrapper } from '@/utils/style/wrapper';

export const Background = styled.div<BackgroundColorPropsType & ThemePropsType>`
  background-color: ${({ theme, backgroundColor = 'transparent' }) => getCustomColorFromTheme(theme, backgroundColor)};
  width: 100%;
`;

export const Wrapper = styled(RwdWrapper)`
  padding: 64px 0;
  
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    padding: 40px 16px;
  }
`;

export const WrapperWithFlexGap = styled(Wrapper)`
  display: flex;
  gap: 100px;
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    gap: 40px;
  }
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    flex-direction: column;
  }
`;

export const BottomButtonWrapper = styled(ButtonWrapper)`
  margin-top: 40px;
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    margin-top: 24px;
  }
`;

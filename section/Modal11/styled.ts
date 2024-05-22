import styled from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { BackgroundColorPropsType } from '@/constants/types/styled';
import { getCustomColorFromTheme } from '@/utils/style';
import { CustomSizeImage } from '@/components/Image/styledImages';

export const Mask = styled.div<BackgroundColorPropsType>`
  z-index: 999;
  background-color: ${({ backgroundColor }) => getCustomColorFromTheme(backgroundColor || 'black')}7F;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div<BackgroundColorPropsType>`
  background-color: ${({ backgroundColor }) => getCustomColorFromTheme(backgroundColor || 'white')};
  position: relative;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  display: flex;
  box-shadow: 0px 0px 40px 0px ${({ theme }) => theme.colors.boxShadow};
  margin: auto 16px;

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    max-width: 640px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const TextWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 48px 24px 24px;

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    display: block;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  justify-content: flex-end;
`;

export const Image = styled(CustomSizeImage)`
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    display: none;
  }
`;

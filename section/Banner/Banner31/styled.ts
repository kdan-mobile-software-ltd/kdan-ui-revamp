import styled from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { AlignCenterPropsType, BackgroundColorPropsType } from '@/constants/types/styled';
import { Typography } from '@/components/Typography';
import { getCustomColorFromTheme } from '@/utils/style';
import { CustomSizeImage } from '@/components/Image/styledImages';
import { RwdWrapper } from '@/utils/style/wrapper';

export const Background = styled.div<BackgroundColorPropsType>`
  height: 400px;
  background-color: ${({ backgroundColor = 'transparent' }) => getCustomColorFromTheme(backgroundColor)};
  width: 100%;
  display: flex;
  position: relative;
`;

export const SideImage = styled(CustomSizeImage)<BackgroundColorPropsType>`
  position: absolute;
  top: 0;

  &.right {
    right: 0;
  }
  &.left {
    left: 0;
  }
`;

export const ContentWrapper = styled(RwdWrapper)`
  flex-grow: 1;
  margin: auto;
  z-index: 2;
`;

export const Desc = styled(Typography)<AlignCenterPropsType>`
  text-align: center;
  margin-top: 32px;
  
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    text-align: left;
    margin-top: 16px;
  }
`;

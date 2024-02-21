import styled, { css } from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { AlignCenterPropsType, BackgroundColorPropsType } from '@/constants/types/styled';
import { CustomSizeImage } from '@/components/Image/styledImages';
import { Typography } from '@/components/Typography';

export const Wrapper = styled.div<BackgroundColorPropsType & AlignCenterPropsType>`
  padding: 64px 40px;
  width: 100%;
  max-width: 1080px;
  ${({ alignCenter }) => alignCenter && css`text-align: center;`}
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    padding: 40px;
  }
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    padding: 40px 16px;
  }
`;

export const WrapperWithFlexGap = styled(Wrapper)`
  display: flex;
  gap: 64px;
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    gap: 48px;
  }
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const ButtonWrapper = styled.div<AlignCenterPropsType>`
  display: flex;
  gap: 12px;
  ${({ alignCenter }) => css`justify-content: ${alignCenter ? 'center' : 'left'};`}
  align-items: center;
  margin-bottom: 20px;

  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    flex-direction: column;
  }
`;

export const AlignCenterImage = styled(CustomSizeImage)`
  margin: 0 auto;
  display: block;
`;

export const ContainImage = styled(AlignCenterImage)`
  object-fit: contain;
`;

export const Title = styled(Typography)<AlignCenterPropsType>`
  margin-bottom: 20px;
  
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    margin-bottom: 16px;
  }
`;

export const Desc = styled(Typography)<AlignCenterPropsType>`
  margin-bottom: 24px;
  
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    margin-bottom: 32px;
  }
`;

export const HyperlinkWrapper = styled.div<AlignCenterPropsType>`
  margin-bottom: 64px;
  
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    margin-bottom: 24px;
  }
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    text-align: center;
    margin-bottom: 0;
  }
`;

import styled, { css } from 'styled-components';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { AlignCenterPropsType, BackgroundColorPropsType } from '@/constants/types/styled';
import { CustomSizeImage } from '@/components/Image/styledImages';
import { Typography } from '@/components/Typography';
import { RwdWrapper } from '@/utils/style/wrapper';

export const Wrapper = styled(RwdWrapper)<BackgroundColorPropsType & AlignCenterPropsType>`
  padding: 64px 0;
  ${({ alignCenter }) => alignCenter && css`text-align: center;`}

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    padding: 40px 0;
  }
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    padding: 40px 16px;
  }
`;

export const WrapperWithFlexGap = styled(Wrapper)`
  display: flex;
  gap: 64px;
  text-align: left;
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    gap: 48px;
  }
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`;

export const ButtonWrapper = styled.div<AlignCenterPropsType>`
  display: flex;
  gap: 12px;
  ${({ alignCenter }) => css`justify-content: ${alignCenter ? 'center' : 'left'};`}
  align-items: center;

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

export const HyperlinkVerticalWrapper = styled.div<AlignCenterPropsType>`
  margin-top: 20px;
  margin-bottom: 64px;
  
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    margin-bottom: 24px;
  }
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    text-align: center;
  }
`;
export const HyperlinkHorizonWrapper = styled.div<AlignCenterPropsType>`
  margin-top: 20px;
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    text-align: center;
  }
`;

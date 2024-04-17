import styled from 'styled-components';
import { Typography } from '@/components/Typography';
import { MAX_WIDTH_QUERY } from '@/constants/breakpoints';
import { RwdWrapper } from '@/utils/style/wrapper';
import { CustomSizeImage } from '@/components/Image/styledImages';

export const GroupWrapper = styled(RwdWrapper)`
  display: flex;
  gap: 60px;

  @media screen and (${MAX_WIDTH_QUERY.laptop}) {
    gap: 40px;
  }

  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    flex-direction: column;
  }
`;

export const Desc = styled(Typography)`
  -webkit-line-clamp: 5; /* number of lines to show */
  line-clamp: 5; 
`;

export const Image = styled(CustomSizeImage)`
  margin: 0 16px 40px;
  
  @media screen and (${MAX_WIDTH_QUERY.laptop}) {
    margin: 0 0 40px;
  }
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    margin: 0;
  }
`;

export const FlexWrapper = styled.div`
  @media screen and (${MAX_WIDTH_QUERY.tablet}) {
    display: flex;
    gap: 40px;
  }
  @media screen and (${MAX_WIDTH_QUERY.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

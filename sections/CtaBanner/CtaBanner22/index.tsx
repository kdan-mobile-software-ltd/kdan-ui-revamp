import React from 'react';
import { Typography } from '@/components/Typography';
import {
  ButtonWrapper, ContentWidthBackground, TextWrapper, WrapperWithFlexGap,
} from '../styled';
import { CtaBanner22Props } from './types';

export const CtaBanner22: React.FC<CtaBanner22Props> = ({ data, customStyle, children }) => (
  <ContentWidthBackground backgroundColor={customStyle?.background?.color}>
    <WrapperWithFlexGap>
      <TextWrapper>
        <Typography fontSize={{ default: 'h5', tablet: 'h7' }} {...customStyle?.title}>
          {data.title}
        </Typography>
        {data.desc && (
        <Typography fontSize={{ default: 'body3', tablet: 'body5' }} {...customStyle?.desc} margin="12px 0 0">
          {data.desc}
        </Typography>
        )}
      </TextWrapper>
      <ButtonWrapper>
        {children}
      </ButtonWrapper>
    </WrapperWithFlexGap>
  </ContentWidthBackground>
);

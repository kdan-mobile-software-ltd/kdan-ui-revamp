import React from 'react';
import { Typography } from '@/components/Typography';
import {
  Background, ButtonWrapper, TextWrapper, WrapperWithFlexGap,
} from '../styled';
import { CtaBanner21Props } from './types';

export const CtaBanner21: React.FC<CtaBanner21Props> = ({ data, customStyle, children }) => (
  <Background backgroundColor={customStyle?.background?.color}>
    <WrapperWithFlexGap>
      <TextWrapper>
        <Typography fontSize={{ default: 'h5', tablet: 'h7' }} fontWeight="700" {...customStyle?.title}>
          {data.title}
        </Typography>
        {data.desc && (
        <Typography fontSize={{ default: 'body3', tablet: 'body5' }} margin="12px 0 0" {...customStyle?.desc}>
          {data.desc}
        </Typography>
        )}
      </TextWrapper>
      <ButtonWrapper>
        {children}
      </ButtonWrapper>
    </WrapperWithFlexGap>
  </Background>
);

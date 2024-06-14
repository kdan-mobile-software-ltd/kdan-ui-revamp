import React from 'react';
import { Typography } from '@/components/Typography';
import { Background, BottomButtonWrapper, Wrapper } from '../styled';
import { CtaBanner11Props } from './types';

export const CtaBanner11: React.FC<CtaBanner11Props> = ({ data, customStyle, children }) => (
  <Background backgroundColor={customStyle?.background?.color}>
    <Wrapper>
      <Typography fontSize={{ default: 'h5', tablet: 'h7' }} textAlign="center" fontWeight="700" {...customStyle?.title}>
        {data.title}
      </Typography>
      <BottomButtonWrapper>
        {children}
      </BottomButtonWrapper>
    </Wrapper>
  </Background>
);

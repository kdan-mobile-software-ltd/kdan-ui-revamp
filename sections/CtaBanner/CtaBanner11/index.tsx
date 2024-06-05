import React from 'react';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';
import { Background, BottomButtonWrapper, Wrapper } from '../styled';
import { CtaBanner11Props } from './types';

export const CtaBanner11: React.FC<CtaBanner11Props> = ({ data, customStyle }) => (
  <Background backgroundColor={customStyle?.background?.color}>
    <Wrapper>
      <Typography fontSize={{ default: 'h5', tablet: 'h7' }} textAlign="center" fontWeight="700" {...customStyle?.title}>
        {data.title}
      </Typography>
      {(data?.button1 || data?.button2) && (
      <BottomButtonWrapper>
        {data?.button1 && (
        <Button {...customStyle?.button1} {...data.button1}>
          {data.button1.text}
        </Button>
        )}
        {data?.button2 && (
        <Button {...customStyle?.button2} {...data.button2}>
          {data.button2.text}
        </Button>
        )}
      </BottomButtonWrapper>
      )}
    </Wrapper>
  </Background>
);

import React from 'react';
import { Typography } from '@/components/Typography';
import { CustomColor } from '@/constants/themes/colors';
import { HocButtonData, ButtonStyle } from '@/components/Button/types';
import { Button } from '@/components/Button';
import { TextCustomCssProps } from '@/utils/style/textStyle';
import { Background, BottomButtonWrapper, Wrapper } from '../styled';

type ComponentProps = {
  data: {
    title: string;
    button1?: HocButtonData;
    button2?: HocButtonData;
  };
  customStyle?: {
    background?: {
      color: CustomColor;
    }
    title?: TextCustomCssProps;
    button1?: ButtonStyle;
    button2?: ButtonStyle;
  };
};

export const CtaBanner11: React.FC<ComponentProps> = ({ data, customStyle }) => (
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

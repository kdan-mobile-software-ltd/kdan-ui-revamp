import React from 'react';
import { Typography } from '@/components/Typography';
import { CustomColor } from '@/constants/themes/colors';
import { HocButtonData, ButtonStyle } from '@/components/Button/types';
import { Button } from '@/components/Button';
import { BottomButtonWrapper, Wrapper } from '../styled';

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
    title?: {
      color: CustomColor;
    };
    button1?: ButtonStyle;
    button2?: ButtonStyle;
  };
};

export const CtaBanner11: React.FC<ComponentProps> = ({ data, customStyle }) => (
  <Wrapper backgroundColor={customStyle?.background?.color}>
    <Typography fontSize={{ default: 'h5', tablet: 'h7' }} textAlign="center" color={customStyle?.title?.color}>
      {data.title}
    </Typography>
    {(data?.button1 || data?.button2) && (
      <BottomButtonWrapper>
        {data?.button1 && (
        <Button {...customStyle?.button1} icon={data.button1.icon}>
          {data.button1.text}
        </Button>
        )}
        {data?.button2 && (
        <Button {...customStyle?.button2} icon={data.button2.icon}>
          {data.button2.text}
        </Button>
        )}
      </BottomButtonWrapper>
    )}
  </Wrapper>
);

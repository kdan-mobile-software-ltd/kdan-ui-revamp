import React from 'react';
import { Typography } from '@/components/Typography';
import { CustomColor } from '@/constants/themes/colors';
import { HocButtonDataProps, ButtonStyleProps } from '@/components/Button/types';
import { Button } from '@/components/Button';
import { ButtonWrapper, WrapperWithFlexGap } from '../styled';

type ComponentProps = {
  data: {
    title: string;
    desc?: string;
    button1?: HocButtonDataProps;
    button2?: HocButtonDataProps;
  };
  customStyle?: {
    background?: {
      color: CustomColor;
    }
    title?: {
      color: CustomColor;
    };
    desc?: {
      color: CustomColor;
    };
    button1?: ButtonStyleProps;
    button2?: ButtonStyleProps;
  };
};

export const CtaBanner21: React.FC<ComponentProps> = ({ data, customStyle }) => (
  <WrapperWithFlexGap backgroundColor={customStyle?.background?.color}>
    <div>
      <Typography rwdFontSize={{ default: 'h5', tablet: 'h7' }} color={customStyle?.title?.color}>
        {data.title}
      </Typography>
      {data.desc && (
      <Typography rwdFontSize={{ default: 'body3', tablet: 'body5' }} color={customStyle?.desc?.color} margin="12px 0 0">
        {data.desc}
      </Typography>
      )}
    </div>
    {(data?.button1 || data?.button2) && (
      <ButtonWrapper>
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
      </ButtonWrapper>
    )}
  </WrapperWithFlexGap>
);

import React from 'react';
import { Typography } from '@/components/Typography';
import { CustomColor } from '@/constants/themes/colors';
import { HocButtonData, ButtonStyle } from '@/components/Button/types';
import { Button } from '@/components/Button';
import { ButtonWrapper, ContentWidthBackground, WrapperWithFlexGap } from '../styled';

type ComponentProps = {
  data: {
    title: string;
    desc?: string;
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
    desc?: {
      color: CustomColor;
    };
    button1?: ButtonStyle;
    button2?: ButtonStyle;
  };
};

export const CtaBanner22: React.FC<ComponentProps> = ({ data, customStyle }) => (
  <ContentWidthBackground backgroundColor={customStyle?.background?.color}>
    <WrapperWithFlexGap>
      <div>
        <Typography fontSize={{ default: 'h5', tablet: 'h7' }} color={customStyle?.title?.color}>
          {data.title}
        </Typography>
        {data.desc && (
        <Typography fontSize={{ default: 'body3', tablet: 'body5' }} color={customStyle?.desc?.color} margin="12px 0 0">
          {data.desc}
        </Typography>
        )}
      </div>
      {(data?.button1 || data?.button2) && (
        <ButtonWrapper>
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
        </ButtonWrapper>
      )}
    </WrapperWithFlexGap>
  </ContentWidthBackground>
);

import React from 'react';
import { Typography } from '@/components/Typography';
import { CustomColor } from '@/constants/themes/colors';
import { HocButtonData, ButtonStyle } from '@/components/Button/types';
import { Button } from '@/components/Button';
import { TextCustomCssProps } from '@/utils/style/textStyle';
import {
  ButtonWrapper, ContentWidthBackground, TextWrapper, WrapperWithFlexGap,
} from '../styled';

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
    title?: TextCustomCssProps;
    desc?: TextCustomCssProps;
    button1?: ButtonStyle;
    button2?: ButtonStyle;
  };
};

export const CtaBanner22: React.FC<ComponentProps> = ({ data, customStyle }) => (
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

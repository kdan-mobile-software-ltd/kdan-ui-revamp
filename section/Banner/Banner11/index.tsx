import React from 'react';
import { CustomColor } from '@/constants/themes/colors';
import { HocButtonData, ButtonStyle } from '@/components/Button/types';
import { Button } from '@/components/Button';
import { Hyperlink } from '@/components/Hyperlink';
import { HocHyperlinkData, HyperlinkStyle } from '@/components/Hyperlink/types';
import { ImgData } from '@/constants/types/global';
import { CustomImageSize } from '@/components/Image/styledImages';
import {
  AlignCenterImage, ButtonWrapper, Desc, HyperlinkHorizonWrapper, Title, WrapperWithFlexGap,
} from '../styled';

type ComponentProps = {
  data: {
    title: string;
    desc?: string;
    button1?: HocButtonData;
    button2?: HocButtonData;
    hyperlink?: HocHyperlinkData;
    image: ImgData;
  };
  customStyle?: {
    title?: {
      color: CustomColor;
    };
    desc?: {
      color: CustomColor;
    };
    button1?: ButtonStyle;
    button2?: ButtonStyle;
    hyperlink?: HyperlinkStyle;
    image?: CustomImageSize;
  };
};

export const Banner11: React.FC<ComponentProps> = ({ data, customStyle }) => (
  <WrapperWithFlexGap>
    <div>
      <Title fontSize={{ default: 'h2', tablet: 'h4' }} color={customStyle?.title?.color}>
        {data.title}
      </Title>
      {data.desc && (
      <Desc fontSize={{ default: 'body1', tablet: 'body3' }} color={customStyle?.desc?.color} margin="12px 0 0">
        {data.desc}
      </Desc>
      )}
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
      {data?.hyperlink && (
      <HyperlinkHorizonWrapper>
        <Hyperlink
          {...customStyle?.hyperlink}
          fontSize={{ default: 'button1', tablet: 'button3' }}
          variant="underline"
          {...data.hyperlink}
        >
          {data.hyperlink.label}
        </Hyperlink>
      </HyperlinkHorizonWrapper>
      )}
    </div>
    <AlignCenterImage
      {...data.image}
      customStyle={customStyle?.image}
    />
  </WrapperWithFlexGap>
);

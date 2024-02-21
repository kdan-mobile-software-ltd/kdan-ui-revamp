import React from 'react';
import { CustomColor } from '@/constants/themes/colors';
import { HocButtonData, ButtonStyle } from '@/components/Button/types';
import { Button } from '@/components/Button';
import { Hyperlink } from '@/components/Hyperlink';
import { HocHyperlinkData, HyperlinkStyle } from '@/components/Hyperlink/types';
import { ImgData } from '@/constants/types/global';
import {
  ButtonWrapper, ContainImage, Desc, HyperlinkWrapper, Title, Wrapper,
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
  };
};

export const Banner21: React.FC<ComponentProps> = ({ data, customStyle }) => (
  <Wrapper alignCenter>
    <Title fontSize={{ default: 'h2', tablet: 'h4' }} color={customStyle?.title?.color}>
      {data.title}
    </Title>
    {data.desc && (
    <Desc fontSize={{ default: 'body1', tablet: 'body3' }} color={customStyle?.desc?.color} margin="12px 0 0">
      {data.desc}
    </Desc>
    )}
    {(data?.button1 || data?.button2) && (
    <ButtonWrapper alignCenter>
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
    {data?.hyperlink && (
    <HyperlinkWrapper>
      <Hyperlink
        {...customStyle?.hyperlink}
        href={data.hyperlink.href}
        fontSize={{ default: 'button1', tablet: 'button3' }}
        variant="underline"
      >
        {data.hyperlink.label}
      </Hyperlink>
    </HyperlinkWrapper>
    )}
    <ContainImage
      src={data.image.src}
      alt={data.image.alt}
      customStyle={{
        width: { default: '800px', tablet: '576px', mobile: '288px' },
        height: { default: '400px', tablet: '288px', mobile: '288px' },
      }}
    />
  </Wrapper>
);

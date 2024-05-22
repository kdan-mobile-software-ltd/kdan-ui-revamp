import React from 'react';
import { Typography } from '@/components/Typography';
import { CustomColor } from '@/constants/themes/colors';
import { ImgData } from '@/constants/types/global';
import { TextCustomCssProps } from '@/utils/style/textStyle';
import {
  Background, ContentWrapper, Desc, SideImage,
} from './styled';

type ComponentProps = {
  data: {
    title: string;
    desc: string;
    rightImage: ImgData;
    leftImage: ImgData;
  };
  customStyle?: {
    backgroundColor?: CustomColor;
    title?: TextCustomCssProps;
    desc?: TextCustomCssProps;
  };
};

export const Banner31: React.FC<ComponentProps> = ({ data, customStyle }) => (
  <Background backgroundColor={customStyle?.backgroundColor}>
    <SideImage
      {...data.rightImage}
      className="left"
      customStyle={{ height: { default: '400px' }, width: { default: '320px' } }}
    />
    <ContentWrapper>
      <Typography fontSize={{ default: 'h2', tablet: 'h4' }} fontWeight="700" textAlign="center" {...customStyle?.title}>
        {data.title}
      </Typography>
      <Desc fontSize={{ default: 'body1', tablet: 'body3' }} {...customStyle?.desc}>
        {data.desc}
      </Desc>
    </ContentWrapper>
    <SideImage
      {...data.rightImage}
      className="right"
      customStyle={{ height: { default: '400px' }, width: { default: '320px', mobile: '0' } }}
    />
  </Background>
);

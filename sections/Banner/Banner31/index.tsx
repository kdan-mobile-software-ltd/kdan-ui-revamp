import React from 'react';
import { Typography } from '@/components/Typography';
import {
  Background, ContentWrapper, Desc, SideImage,
} from './styled';
import { Banner31Props } from './types';

export const Banner31: React.FC<Banner31Props> = ({ data, customStyle }) => (
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

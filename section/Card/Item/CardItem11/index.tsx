import React from 'react';
import { Typography } from '@/components/Typography';
import { CustomSizeImage } from '@/components/Image/styledImages';
import { Wrapper } from './styled';
import { CardItem11Props } from './types';

export const CardItem11: React.FC<CardItem11Props> = ({ data, customStyle }) => (
  <Wrapper
    {...customStyle?.wrapper}
    {...data?.hyperlink}
    isNoHover={!data?.hyperlink?.href}
  >
    {data?.icon?.src && <CustomSizeImage {...data.icon} customStyle={{ width: { default: '60px' }, height: { default: '60px' }, margin: '0 auto 24px' }} />}
    {data.title && <Typography fontSize={{ default: 'h8' }} fontWeight="700" textAlign="center" {...customStyle?.title}>{data.title}</Typography>}
    {data.desc && <Typography fontSize={{ default: 'body5' }} margin="8px 0 0" {...customStyle?.desc}>{data.desc}</Typography>}
  </Wrapper>
);

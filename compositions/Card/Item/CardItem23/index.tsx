import React from 'react';
import { Typography } from '@/components/Typography';
import { CustomSizeImage } from '@/components/Image/styledImages';
import { Hyperlink } from '@/components/Hyperlink';
import { AlignBottomWrapper } from '@/utils/style';
import { ContentWrapper, Wrapper } from './styled';
import { CardItem23Props } from './types';

export const CardItem23: React.FC<CardItem23Props> = ({ data, customStyle }) => (
  <Wrapper
    {...data?.hyperlink}
    {...customStyle?.wrapper}
    isNoHover={!data?.hyperlink?.href}
  >
    {data?.image?.src && <CustomSizeImage customStyle={{ width: { default: '100%' }, height: { default: '216px', tablet: '192px' } }} {...data.image} />}

    <ContentWrapper>
      {data.title && <Typography fontSize={{ default: 'h5' }} fontWeight="700" {...customStyle?.title}>{data.title}</Typography>}
      {data.desc && <Typography fontSize={{ default: 'body3' }} margin="12px 0 0" {...customStyle?.desc}>{data.desc}</Typography>}
      {data.hyperlink?.href && (
        <AlignBottomWrapper>
          <Hyperlink fontSize={{ default: 'button2' }} variant="underline" {...data?.hyperlink} {...customStyle?.hyperlink}>{data.hyperlink.label}</Hyperlink>
        </AlignBottomWrapper>
      )}
    </ContentWrapper>
  </Wrapper>
);

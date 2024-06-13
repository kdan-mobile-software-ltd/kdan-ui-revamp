import React from 'react';
import { Typography } from '@/components/Typography';
import { CustomSizeImage } from '@/components/Image/styledImages';
import { Hyperlink } from '@/components/Hyperlink';
import { HOST } from '@/constants/config';
import { Wrapper, ContentWrapper, Image } from './styled';
import { CardItem41Props } from './types';

export const CardItem41: React.FC<CardItem41Props> = ({ data, customStyle }) => (
  <Wrapper {...customStyle?.wrapper} size={customStyle?.size}>
    {data?.image?.src && (
      <Image
        customStyle={{ width: { default: '256px' }, height: { default: '100px' } }}
        size={customStyle?.size}
        {...data.image}
      />
    )}

    <ContentWrapper size={customStyle?.size}>
      <CustomSizeImage
        src={`${HOST}/assets/decoration/quotation-mark.svg`}
        alt="quotation-mark-img"
        customStyle={{ width: { default: '24px' }, height: { default: '24px' } }}
      />
      {data.desc && (
      <Typography
        fontSize={{ default: 'body5' }}
        margin="16px 0 12px"
        {...customStyle?.desc}
        dangerouslySetInnerHTML={{ __html: data.desc }}
      />
      )}
      {data.userTitle && (
      <Typography
        fontSize={{ default: 'body5' }}
        fontWeight="700"
        {...customStyle?.userTitle}
      >
        {data.userTitle}
      </Typography>
      )}
      {data.hyperlink?.href && (
        <Hyperlink
          fontSize={{ default: 'body5' }}
          variant="underline"
          display="block"
          margin="20px 0 0"
          {...data?.hyperlink}
          {...customStyle?.hyperlink}
        >
          {data.hyperlink.label}
        </Hyperlink>
      )}
    </ContentWrapper>
  </Wrapper>
);

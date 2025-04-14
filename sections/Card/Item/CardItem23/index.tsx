import React from 'react';
import { Hyperlink } from '@/components/Hyperlink';
import {
  Image, Wrapper, Title, Desc, ContentWrapper,
} from './styled';
import { CardItem23Props } from './types';

export const CardItem23: React.FC<CardItem23Props> = ({ data, customStyle }) => {
  const handleWrapperClick = () => {
    if (data?.hyperlink?.href) {
      window.location.href = data.hyperlink.href;
    }
  };

  return (
    <Wrapper
      {...customStyle?.wrapper}
      isNoHover={!data?.hyperlink?.href}
      hasHyperlink={!!data.hyperlink?.href}
      onClick={handleWrapperClick}
    >
      {data?.image?.src && (
        <Image
          isNoMargin={customStyle?.image?.isNoMargin}
          {...data.image}
        />
      )}

      <ContentWrapper>
        {data.title && (
        <Title
          fontSize={{ default: 'h5' }}
          fontWeight="700"
          {...customStyle?.title}
        >
          {data.title}
        </Title>
        )}
        {data.desc && (
        <Desc
          fontSize={{ default: 'body3' }}
          margin="12px 0 0"
          {...customStyle?.desc}
          dangerouslySetInnerHTML={{ __html: data.desc }}
        />
        )}
        {data.hyperlink?.href && (
          <Hyperlink
            fontSize={{ default: 'button2' }}
            variant="underline"
            margin="24px 0 0"
            display="block"
            {...data?.hyperlink}
            {...customStyle?.hyperlink}
            onClick={(e) => e.stopPropagation()}
          >
            {data.hyperlink.label}
          </Hyperlink>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

import React from 'react';
import { Hyperlink } from '@/components/Hyperlink';
import {
  Wrapper, Title, ContentWrapper, Image, Desc,
} from './styled';
import { ContentItem31Props } from './types';

export const ContentItem31: React.FC<ContentItem31Props> = ({ data, customStyle }) => (
  <Wrapper
    key={data.title}
    borderColor={customStyle?.wrapper?.borderColor}
    backgroundColor={customStyle?.wrapper?.backgroundColor}
  >
    <ContentWrapper>
      <div>
        <Title fontSize={{ default: 'h5', tablet: 'h7' }} fontWeight="700" {...customStyle?.title}>{data.title}</Title>
        <Desc fontSize={{ default: 'body5' }} margin="12px 0 0" {...customStyle?.desc} dangerouslySetInnerHTML={{ __html: data.desc }} />
      </div>
      {data?.hyperlink && (
        <Hyperlink
          fontSize={{ default: 'button2', tablet: 'button3' }}
          margin="24px 0 0"
          display="block"
          {...customStyle?.hyperlink}
          {...data.hyperlink}
        >
          {data.hyperlink.label}
        </Hyperlink>
      )}
    </ContentWrapper>
    <Image src={data.image.src} alt={data.image.alt} />
  </Wrapper>
);

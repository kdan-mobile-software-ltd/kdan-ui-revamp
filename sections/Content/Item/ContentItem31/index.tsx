import React from 'react';
import { Typography } from '@/components/Typography';
import { Hyperlink } from '@/components/Hyperlink';
import { AlignBottomWrapper } from '@/utils/style';
import {
  Wrapper, Title, ContentWrapper, Image,
} from './styled';
import { ContentItem31Props } from './types';

export const ContentItem31: React.FC<ContentItem31Props> = ({ data, customStyle }) => (
  <Wrapper
    key={data.title}
    borderColor={customStyle?.wrapper?.borderColor}
    backgroundColor={customStyle?.wrapper?.backgroundColor}
  >
    <ContentWrapper minHeight={customStyle?.wrapper?.contentMinHeight}>
      <Title fontSize={{ default: 'h5', tablet: 'h7' }} fontWeight="700" {...customStyle?.title}>{data.title}</Title>
      <Typography fontSize={{ default: 'body5' }} margin="12px 0 0" {...customStyle?.desc} dangerouslySetInnerHTML={{ __html: data.desc }} />
      {data?.hyperlink && (
      <AlignBottomWrapper>
        <Hyperlink
          fontSize={{ default: 'button2', tablet: 'button3' }}
          margin="auto 0 0"
          {...customStyle?.hyperlink}
          {...data.hyperlink}
        >
          {data.hyperlink.label}
        </Hyperlink>
      </AlignBottomWrapper>
      )}
    </ContentWrapper>
    <Image src={data.image.src} alt={data.image.alt} />
  </Wrapper>
);

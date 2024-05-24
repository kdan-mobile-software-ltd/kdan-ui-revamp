import React from 'react';
import { Typography } from '@/components/Typography';
import { Hyperlink } from '@/components/Hyperlink';
import { AlignBottomWrapper } from '@/utils/style';
import {
  Wrapper, Title, ContentWrapper, Image,
} from './styled';
import { ContentItem31CustomStyle, ContentItem31Data } from './types';

type Props = {
  data: ContentItem31Data;
  customStyle?: ContentItem31CustomStyle;
};

export const ContentItem31: React.FC<Props> = ({ data, customStyle }) => (
  <Wrapper
    borderColor={customStyle?.wrapper?.borderColor}
    backgroundColor={customStyle?.wrapper?.backgroundColor}
  >
    <ContentWrapper minHeight={customStyle?.wrapper?.contentMinHeight}>
      <Title fontSize={{ default: 'h5', tablet: 'h7' }} fontWeight="700" {...customStyle?.title}>{data.title}</Title>
      <Typography fontSize={{ default: 'body5' }} margin="12px 0 0" {...customStyle?.desc}>{data.desc}</Typography>
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

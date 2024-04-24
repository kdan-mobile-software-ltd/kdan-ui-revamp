import React from 'react';
import { Hyperlink } from '@/components/Hyperlink';
import { Typography } from '@/components/Typography';
import { HyperlinkWrapper } from '../../styled';
import { Wrapper } from './styled';
import { Props } from './types';

export const ContentItem1: React.FC<Props> = ({ data, customStyle }) => (
  <Wrapper>
    {data.title && <Typography fontSize={{ default: 'h5', tablet: 'h7' }} {...customStyle?.title}>{data.title}</Typography>}
    {data.desc && <Typography fontSize={{ default: 'body3', tablet: 'body5' }} margin="12px 0 0" {...customStyle?.desc}>{data.desc}</Typography>}

    {data?.hyperlink
      && (
        <HyperlinkWrapper>
          <Hyperlink
            fontSize={{ default: 'button2', tablet: 'button3' }}
            {...customStyle?.hyperlink}
            {...data.hyperlink}
          >
            {data.hyperlink.label}
          </Hyperlink>
        </HyperlinkWrapper>
      )}
  </Wrapper>
);

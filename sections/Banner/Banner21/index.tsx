import React from 'react';
import { Hyperlink } from '@/components/Hyperlink';
import {
  ButtonWrapper, ContainImage, Desc, HyperlinkVerticalWrapper, Title, Wrapper,
} from '../styled';
import { Banner21Props } from './types';
import { isValidTitleTag, isValidDescTag } from '../tagGuards';

export const Banner21: React.FC<Banner21Props> = ({ data, customStyle, customTag, children }) => (
  <Wrapper alignCenter>
    <Title fontSize={{ default: 'h2', tablet: 'h4' }} color={customStyle?.title?.color} {...isValidTitleTag(customTag?.title) ? { as: customTag.title } : {}}>
      {data.title}
    </Title>
    {data.desc && (
    <Desc
      fontSize={{ default: 'body1', tablet: 'body3' }}
      color={customStyle?.desc?.color}
      margin="12px 0 0"
      dangerouslySetInnerHTML={{ __html: data.desc }}
      {...isValidDescTag(customTag?.desc) ? { as: customTag.desc } : {}}
    />
    )}

    <ButtonWrapper alignCenter>
      {children}
    </ButtonWrapper>

    {data?.hyperlink && (
    <HyperlinkVerticalWrapper>
      <Hyperlink
        {...customStyle?.hyperlink}
        {...data.hyperlink}
        fontSize={{ default: 'button1', tablet: 'button3' }}
        variant="underline"
      >
        {data.hyperlink.label}
      </Hyperlink>
    </HyperlinkVerticalWrapper>
    )}
    <ContainImage
      {...data.image}
      customStyle={{
        width: { default: '800px', tablet: '576px', mobile: '288px' },
        height: { default: '400px', tablet: '288px', mobile: '288px' },
      }}
    />
  </Wrapper>
);

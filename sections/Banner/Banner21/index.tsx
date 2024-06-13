import React from 'react';
import { Button } from '@/components/Button';
import { Hyperlink } from '@/components/Hyperlink';
import {
  ButtonWrapper, ContainImage, Desc, HyperlinkVerticalWrapper, Title, Wrapper,
} from '../styled';
import { Banner21Props } from './types';

export const Banner21: React.FC<Banner21Props> = ({ data, customStyle }) => (
  <Wrapper alignCenter>
    <Title fontSize={{ default: 'h2', tablet: 'h4' }} color={customStyle?.title?.color}>
      {data.title}
    </Title>
    {data.desc && (
    <Desc
      fontSize={{ default: 'body1', tablet: 'body3' }}
      color={customStyle?.desc?.color}
      margin="12px 0 0"
      dangerouslySetInnerHTML={{ __html: data.desc }}
    />
    )}
    {(data?.button1 || data?.button2) && (
    <ButtonWrapper alignCenter>
      {data?.button1 && (
      <Button {...customStyle?.button1} {...data.button1}>
        {data.button1.text}
      </Button>
      )}
      {data?.button2 && (
      <Button {...customStyle?.button2} {...data.button2}>
        {data.button2.text}
      </Button>
      )}
    </ButtonWrapper>
    )}
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

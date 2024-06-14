import React from 'react';
import { Hyperlink } from '@/components/Hyperlink';
import {
  AlignCenterImage, ButtonWrapper, Desc, Title, WrapperWithFlexGap,
} from '../styled';
import { Banner11Props } from './types';

export const Banner11: React.FC<Banner11Props> = ({ data, customStyle, children }) => (
  <WrapperWithFlexGap>
    <div>
      <Title fontSize={{ default: 'h2', tablet: 'h4' }} fontWeight="700" color={customStyle?.title?.color}>
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

      <ButtonWrapper>
        {children}
      </ButtonWrapper>

      {data?.hyperlink && (
        <Hyperlink
          fontSize={{ default: 'button1', tablet: 'button3' }}
          variant="underline"
          margin="20px 0 0"
          display="block"
          {...customStyle?.hyperlink}
          {...data.hyperlink}
        >
          {data.hyperlink.label}
        </Hyperlink>
      )}
    </div>
    <AlignCenterImage
      {...data.image}
      customStyle={customStyle?.image}
    />
  </WrapperWithFlexGap>
);

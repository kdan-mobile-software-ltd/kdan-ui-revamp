import React from 'react';
import { CustomSizeImage } from '@/components/Image/styledImages';
import { Hyperlink } from '@/components/Hyperlink';
import { Wrapper, Title } from './styled';
import { EventBar11Props } from './types';

export const EventBar11: React.FC<EventBar11Props> = ({ data, customStyle }) => (
  <Wrapper backgroundColor={customStyle?.backgroundColor}>
    {data.icon.src && (
      <CustomSizeImage
        {...data.icon}
        customStyle={{ height: { default: '40px' }, width: { default: '40px' }, margin: '0 8px 0 0' }}
      />
    )}
    <span>
      <Title fontSize={{ default: 'button3', tablet: 'button4' }} {...customStyle?.title}>
        {data.title}
      </Title>
      {data?.hyperlink && (
        <Hyperlink
          variant="arrow"
          fontSize={{ default: 'button3', tablet: 'button4' }}
          margin="0 0 0 8px"
          fontWeight="500"
          {...data.hyperlink}
          {...customStyle?.hyperlink}
        >
          {data.hyperlink.label}
        </Hyperlink>
      )}
    </span>
  </Wrapper>
);

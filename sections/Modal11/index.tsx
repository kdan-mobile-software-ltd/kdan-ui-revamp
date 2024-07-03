import React from 'react';
import { Typography } from '@/components/Typography';
import {
  Mask, ButtonWrapper, ContentWrapper, TextWrapper, Wrapper, Image,
} from './styled';
import { Modal11Props } from './types';

export const Modal11: React.FC<Modal11Props> = ({ data, customStyle, children }) => (
  <Mask backgroundColor={customStyle?.wrapper?.maskBackground}>
    <Wrapper backgroundColor={customStyle?.wrapper?.modalBackground}>
      {data?.image?.src && (
        <Image
          {...data.image}
          customStyle={{ width: { default: '288px' }, height: { default: '384px' } }}
        />
      )}
      <ContentWrapper>
        <TextWrapper>
          {data.title && (
          <Typography
            fontSize={{ default: 'h7' }}
            fontWeight="700"
            {...customStyle?.title}
          >
            {data.title}
          </Typography>
          )}
          {data.desc && (
          <Typography
            fontSize={{ default: 'body5' }}
            margin="16px 0 0"
            {...customStyle?.desc}
            dangerouslySetInnerHTML={{ __html: data.desc }}
          />
          )}
        </TextWrapper>
        <ButtonWrapper>
          {children}
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  </Mask>
);

import React, { useState } from 'react';
import { Typography } from '@/components/Typography';
import { S3_VERTICAL_ARROW } from '@/utils/style/s3Icons';
import {
  Wrapper, DescWrapper, ToggleWrapper, ToggleIcon, Title,
} from './styled';
import { ContentItem41Props } from './types';

export const ContentItem41: React.FC<ContentItem41Props> = ({ data, customStyle }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Wrapper borderColor={customStyle?.borderColor} backgroundColor={customStyle?.backgroundColor}>
      <ToggleWrapper onClick={() => { setOpen((prev) => !prev); }}>
        {data.title && <Title fontSize={{ default: 'h5' }} fontWeight="700" {...customStyle?.title}>{data.title}</Title>}
        <ToggleIcon
          arrowSvgColorFilter={customStyle?.arrowSvgColorFilter}
          isOpen={isOpen}
          src={S3_VERTICAL_ARROW}
          alt="toggle-icon"
        />
      </ToggleWrapper>
      <DescWrapper isOpen={isOpen}>
        {data.desc && (
        <Typography
          fontSize={{ default: 'body5' }}
          {...customStyle?.desc}
          margin="12px 0 0"
          dangerouslySetInnerHTML={{ __html: data.desc }}
        />
        )}
      </DescWrapper>
    </Wrapper>
  );
};

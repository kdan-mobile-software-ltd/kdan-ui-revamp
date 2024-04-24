import React, { useState } from 'react';
import { Typography } from '@/components/Typography';
import {
  Wrapper, DescWrapper, ToggleWrapper, ToggleIcon, Title,
} from './styled';
import { Item as ItemType } from '../../Content41/types';
import { ContentItem41CustomStyle } from './types';

type Props = {
  data: ItemType;
  customStyle?: ContentItem41CustomStyle;
};

export const ContentItem41: React.FC<Props> = ({ data, customStyle }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Wrapper borderColor={customStyle?.borderColor} backgroundColor={customStyle?.backgroundColor}>
      <ToggleWrapper onClick={() => { setOpen((prev) => !prev); }}>
        {data.title && <Title fontSize={{ default: 'h5' }} fontWeight="700" {...customStyle?.title}>{data.title}</Title>}
        <ToggleIcon arrowSvgColorFilter={customStyle?.arrowSvgColorFilter} isOpen={isOpen} src="/assets/icon/vertical-arrow.svg" alt="toggle-icon" />
      </ToggleWrapper>
      <DescWrapper isOpen={isOpen}>
        {data.desc && <Typography fontSize={{ default: 'body5' }} {...customStyle?.desc} margin="10px 0 0">{data.desc}</Typography>}
      </DescWrapper>
    </Wrapper>
  );
};

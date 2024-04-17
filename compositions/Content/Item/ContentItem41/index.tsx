import React from 'react';
import { Typography } from '@/components/Typography';
import { Wrapper } from './styled';
import { Item as ItemType } from '../../Content11/types';
import { ContentItem41CustomStyle } from './types';

type Props = {
  data: ItemType;
  customStyle?: ContentItem41CustomStyle;
};

const ContentItem41: React.FC<Props> = ({ data, customStyle }) => (
  <Wrapper borderColor={customStyle?.borderColor}>
    {data.title && <Typography fontSize={{ default: 'h5' }} fontWeight="700" {...customStyle?.title}>{data.title}</Typography>}
    {data.desc && <Typography fontSize={{ default: 'body5' }} {...customStyle?.desc} margin="10px 0 0">{data.desc}</Typography>}
  </Wrapper>
);

export default ContentItem41;

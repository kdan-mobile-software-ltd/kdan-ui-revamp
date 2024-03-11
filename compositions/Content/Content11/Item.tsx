import React from 'react';
import { ContentIcon } from '@/components/Image/styledImages';
import Content from '../Content';
import { ItemWrapper } from './styled';
import { ItemProps } from './types';

const Item: React.FC<ItemProps> = ({ data, customStyle }) => (
  <ItemWrapper hideAtMobile={customStyle.hideAtMobile}>
    {data?.icon?.src && <ContentIcon {...data.icon} margin="0 0 24px" />}
    <Content data={data} customStyle={customStyle} />
  </ItemWrapper>
);

export default Item;

import React from 'react';
import { Icon } from '@/components/Image/styledImages';
import Content from '../Content';
import { ItemWrapper } from './styled';
import { ItemProps } from './types';

const Item: React.FC<ItemProps> = ({ data, customStyle }) => (
  <ItemWrapper>
    {data?.icon?.src && <Icon {...data.icon} margin="0 0 24px" />}
    <Content data={data} customStyle={customStyle} />
  </ItemWrapper>
);

export default Item;

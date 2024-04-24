import React from 'react';
import { ContentIcon } from '@/components/Image/styledImages';
import { ContentItem1 } from '../Item/ContentItem1';
import { ItemWrapperWithToggle } from '../styled';
import { ItemProps } from './types';

const Item: React.FC<ItemProps> = ({ data, customStyle }) => (
  <ItemWrapperWithToggle hideAtMobile={customStyle.hideAtMobile}>
    {data?.icon?.src && <ContentIcon {...data.icon} margin="0 0 24px" />}
    <ContentItem1 data={data} customStyle={customStyle} />
  </ItemWrapperWithToggle>
);

export default Item;

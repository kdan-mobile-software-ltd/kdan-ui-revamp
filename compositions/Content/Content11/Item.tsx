import React from 'react';
import { ContentIcon } from '@/components/Image/styledImages';
import { ItemToggleAnimationWrapper } from '@/components/private/Toggle/styled';
import { ContentItem1 } from '../Item/ContentItem1';
import { ItemProps } from './types';

const Item: React.FC<ItemProps> = ({ data, customStyle }) => (
  <ItemToggleAnimationWrapper hideAtMobile={customStyle.hideAtMobile}>
    {data?.icon?.src && <ContentIcon {...data.icon} margin="0 0 24px" />}
    <ContentItem1 data={data} customStyle={customStyle} />
  </ItemToggleAnimationWrapper>
);

export default Item;

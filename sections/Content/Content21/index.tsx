import React from 'react';
import Item from './Item';
import { GroupWrapper } from './styled';
import {
  Content21Props, ITEM_LAYOUT,
} from './types';

export const Content21: React.FC<Content21Props> = ({
  data,
  customStyle = {},
  itemLayout = ITEM_LAYOUT.RIGHT_ALTERNATING,
}) => (
  <GroupWrapper>
    {data.map((item, index) => (
      <Item
        key={item.title}
        customStyle={customStyle}
        itemLayout={itemLayout}
        data={item}
        index={index}
      />
    ))}
  </GroupWrapper>
);

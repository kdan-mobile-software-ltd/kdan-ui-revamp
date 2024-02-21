import React from 'react';
import Item from './Item';
import { GroupWrapper } from './styled';
import {
  CustomStyle, Data, ITEM_LAYOUT, ItemLayout,
} from './data';

type Props = {
  data: Data;
  customStyle: CustomStyle;
  itemLayout?: ItemLayout;
};

export const Content21: React.FC<Props> = ({
  data,
  customStyle,
  itemLayout = ITEM_LAYOUT.SEQUENTIAL_ALTERNATING,
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

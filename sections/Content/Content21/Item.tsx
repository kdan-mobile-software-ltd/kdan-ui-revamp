import React from 'react';
import { CustomSizeImage } from '@/components/Image/styledImages';
import { ItemWrapper } from './styled';
import {
  CustomStyle, ITEM_LAYOUT, ItemLayout, Item as ItemType,
} from './data';
import { ContentItem1 } from '../Item/ContentItem1';

type Props = {
  data: ItemType;
  customStyle: CustomStyle;
  index: number;
  itemLayout: ItemLayout;
};

const getIsReverse = (index: number, layout: ItemLayout) => {
  switch (layout) {
    case ITEM_LAYOUT.RIGHT:
      return false;
    case ITEM_LAYOUT.LEFT:
      return true;
    case ITEM_LAYOUT.RIGHT_ALTERNATING:
      return index % 2 === 0;
    case ITEM_LAYOUT.LEFT_ALTERNATING:
    default:
      return index % 2 === 1;
  }
};

const Item: React.FC<Props> = ({
  data, customStyle, itemLayout, index,
}) => (
  <ItemWrapper isReverse={getIsReverse(index, itemLayout)}>
    {data.image && (
      <CustomSizeImage
        {...data.image}
        customStyle={{ width: { default: '50%', mobile: '100%' }, ...customStyle?.image }}
      />
    )}
    <ContentItem1 data={data} customStyle={customStyle} />
  </ItemWrapper>
);

export default Item;

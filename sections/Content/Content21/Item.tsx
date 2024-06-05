import React from 'react';
import { CustomSizeImage } from '@/components/Image/styledImages';
import { ItemWrapper } from './styled';
import {
  Content21CustomStyle, ITEM_LAYOUT, Content21ItemLayout, Content21ItemData as ItemType,
} from './types';
import { ContentItem1 } from '../Item/ContentItem1';

type Props = {
  data: ItemType;
  customStyle: Content21CustomStyle;
  index: number;
  itemLayout: Content21ItemLayout;
};

const getIsReverse = (index: number, layout: Content21ItemLayout) => {
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

import React from 'react';
import { CustomSizeImage } from '@/components/Image/styledImages';
import { ItemWrapper } from './styled';
import { CustomStyle, Item as ItemType } from './types';
import Content from '../Content';

type Props = {
  data: ItemType;
  customStyle: CustomStyle;
  index: number;
};

const Item: React.FC<Props> = ({ data, customStyle, index }) => (
  <ItemWrapper isReverse={index % 2 === 1}>
    {data.image && (
      <CustomSizeImage
        src={data.image.src}
        alt={data.image.alt}
        customStyle={customStyle?.image}
      />
    )}
    <Content data={data} customStyle={customStyle} />
  </ItemWrapper>
);

export default Item;

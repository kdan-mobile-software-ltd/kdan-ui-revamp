import React from 'react';
import { FlexWrapper, Image } from './styled';
import {
  CustomStyle, Item as ItemType,
} from './types';
import ContentItem1 from '../Item/ContentItem1';
import { ItemWrapperWithToggle } from '../styled';

type Props = {
  data: ItemType;
  customStyle?: CustomStyle;
  hideAtMobile: boolean;
};

const Item: React.FC<Props> = ({
  data, customStyle, hideAtMobile,
}) => (
  <ItemWrapperWithToggle hideAtMobile={hideAtMobile}>
    <FlexWrapper>
      {data.image && (
      <Image
        {...data.image}
        customStyle={{
          width: { default: '288px' },
          height: { default: '216px' },
        }}
      />
      )}
      <ContentItem1 data={data} customStyle={customStyle} />
    </FlexWrapper>
  </ItemWrapperWithToggle>
);

export default Item;

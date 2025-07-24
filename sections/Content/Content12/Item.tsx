import React from 'react';
import { ItemToggleAnimationWrapper } from '@/components/private/Toggle/styled';
import { FlexWrapper, Image } from './styled';
import { Content12ItemProps } from './types';
import { ContentItem1 } from '../Item/ContentItem1';

const Item: React.FC<Content12ItemProps> = ({
  data, customStyle, hideAtMobile,
}) => (
  <ItemToggleAnimationWrapper hideAtMobile={hideAtMobile}>
    <FlexWrapper>
      {data.image && (
      <Image
        {...data.image}
        customStyle={{
          width: { default: '288px' },
          height: { default: '216px' },
          ...customStyle?.image,
        }}
      />
      )}
      <ContentItem1 data={data} customStyle={customStyle} />
    </FlexWrapper>
  </ItemToggleAnimationWrapper>
);

export default Item;

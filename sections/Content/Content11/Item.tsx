import React from 'react';
import { CustomSizeImage } from '@/components/Image/styledImages';
import { ItemToggleAnimationWrapper } from '@/components/private/Toggle/styled';
import { ContentItem1 } from '../Item/ContentItem1';
import { ContentItem11ItemProps } from './types';

const Item: React.FC<ContentItem11ItemProps> = ({ data, customStyle }) => (
  <ItemToggleAnimationWrapper hideAtMobile={customStyle.hideAtMobile}>
    {data?.icon?.src && (
    <CustomSizeImage
      {...data.icon}
      customStyle={{ width: { default: '48px', tablet: '40px' }, height: { default: '48px', tablet: '40px' }, margin: '0 0 24px' }}
    />
    )}
    <ContentItem1 data={data} customStyle={customStyle} />
  </ItemToggleAnimationWrapper>
);

export default Item;

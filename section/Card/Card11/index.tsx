import React from 'react';
import { ItemToggleAnimationWrapper } from '@/components/private/Toggle/styled';
import { useToggle } from '@/hooks/useToggle';
import { CardItem11 } from '../Item/CardItem11';
import { ContentWrapper, Wrapper } from './styled';
import { ComponentProps } from './types';

export const Card11: React.FC<ComponentProps> = ({ data, customStyle }) => {
  const hideLongerThan = 3;
  const { ToggleButton, isOpenAtMobile } = useToggle({
    length: data.items.length,
    hideLongerThan,
    toggleText: data.toggleText,
  });

  return (
    <Wrapper>
      <ContentWrapper isThreeColumns={data.items.length % 3 === 0}>
        {data.items.map((item, index) => (
          <ItemToggleAnimationWrapper
            key={item.title}
            hideAtMobile={index >= hideLongerThan && !isOpenAtMobile}
          >
            <CardItem11 data={item} customStyle={customStyle} />
          </ItemToggleAnimationWrapper>
        ))}
      </ContentWrapper>
      {ToggleButton}
    </Wrapper>
  );
};

import React from 'react';
import { ItemToggleAnimationWrapper } from '@/components/private/Toggle/styled';
import { useToggle } from '@/hooks/useToggle';
import { CardItem11 } from '../Item/CardItem11';
import { ContentWrapper, Wrapper } from './styled';
import { Card11Props } from './types';

export const Card11: React.FC<Card11Props> = ({ data, customStyle }) => {
  const hideLongerThan = customStyle?.others?.hideLongerThan || 3;
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
            hideAtMobile={index >= hideLongerThan
              && !customStyle?.others?.isHideToggle
              && !isOpenAtMobile}
          >
            <CardItem11 data={item} customStyle={customStyle} />
          </ItemToggleAnimationWrapper>
        ))}
      </ContentWrapper>
      {!customStyle?.others?.isHideToggle && ToggleButton}
    </Wrapper>
  );
};

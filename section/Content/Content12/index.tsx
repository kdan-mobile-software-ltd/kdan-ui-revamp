import React from 'react';
import { useToggle } from '@/hooks/useToggle';
import Item from './Item';
import { GroupWrapper } from './styled';
import { ComponentProps } from './types';

export const Content12: React.FC<ComponentProps> = ({ data, customStyle }) => {
  const hideLongerThan = 3;
  const { ToggleButton, isOpenAtMobile } = useToggle({
    length: data.items.length,
    hideLongerThan,
    toggleText: data.toggleText,
  });

  return (
    <div>
      <GroupWrapper>
        {data.items.map((item, index) => (
          <Item
            key={item.title}
            data={item}
            customStyle={customStyle}
            hideAtMobile={index >= hideLongerThan && !isOpenAtMobile}
          />
        ))}
      </GroupWrapper>
      {ToggleButton}
    </div>
  );
};

import React from 'react';
import { useToggle } from '@/hooks/useToggle';
import Item from './Item';
import { GroupWrapper } from './styled';
import { Content11Props } from './types';

export const Content11: React.FC<Content11Props> = ({ data, customStyle }) => {
  const hideLongerThan = customStyle?.others?.hideLongerThan || 3;
  const { ToggleButton, isOpenAtMobile } = useToggle({
    length: data.items.length,
    hideLongerThan,
    toggleText: data.toggleText,
  });

  return (
    <div>
      <GroupWrapper numbersOfColumn={customStyle?.others?.numbersOfColumn}>
        {data.items.map((item, index) => (
          <Item
            key={item.title}
            data={item}
            customStyle={{
              ...customStyle,
              hideAtMobile: index >= hideLongerThan && !isOpenAtMobile,
            }}
          />
        ))}
      </GroupWrapper>
      {ToggleButton}
    </div>
  );
};

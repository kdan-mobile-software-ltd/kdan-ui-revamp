import React, { useState } from 'react';
import { ActionIcon } from '@/components/Image/styledImages';
import Item from './Item';
import { GroupWrapper, Toggle } from './styled';
import { ComponentProps } from './types';

export const Content11: React.FC<ComponentProps> = ({ data, customStyle }) => {
  const needToggle = data.items.length > 3;
  const [isOpen, setOpen] = useState(false);
  const toggleText = !isOpen ? (data?.toggleText?.open || 'Open') : (data?.toggleText?.close || 'Close');
  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <GroupWrapper numbersOfColumn={customStyle?.others?.numbersOfColumn}>
      {data.items.map((item, index) => (
        <Item
          key={item.title}
          data={item}
          customStyle={{ ...customStyle, hideAtMobile: index >= 3 && !isOpen }}
        />
      ))}
      {needToggle && (
        <Toggle onClick={toggle} isOpen={isOpen}>
          {toggleText}
          <ActionIcon margin="0 0 0 12px" src="/assets/icon/arrow.svg" alt="toggle-btn-icon" />
        </Toggle>
      )}
    </GroupWrapper>
  );
};

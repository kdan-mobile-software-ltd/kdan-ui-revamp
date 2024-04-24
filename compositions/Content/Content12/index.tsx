import React, { useState } from 'react';
import { ActionIcon } from '@/components/Image/styledImages';
import Item from './Item';
import { GroupWrapper } from './styled';
import { ComponentProps } from './types';
import { Toggle } from '../styled';

export const Content12: React.FC<ComponentProps> = ({ data, customStyle }) => {
  const needToggle = customStyle?.hideAtMobile && data.items.length > 3;
  const [isOpen, setOpen] = useState(false);
  const toggleText = !isOpen ? (data?.toggleText?.open || 'Open') : (data?.toggleText?.close || 'Close');
  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <GroupWrapper>
      {data.items.map((item, index) => (
        <Item
          key={item.title}
          data={item}
          customStyle={customStyle}
          hideAtMobile={Boolean(customStyle?.hideAtMobile && (index >= 3 && !isOpen))}
        />
      ))}
      {needToggle && (
        <Toggle onClick={toggle} isOpen={isOpen}>
          {toggleText}
          <ActionIcon margin="0 0 0 12px" src="/assets/icon/vertical-arrow.svg" alt="toggle-btn-icon" />
        </Toggle>
      )}
    </GroupWrapper>
  );
};

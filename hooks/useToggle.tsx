import { ActionIcon } from '@/components/Image/styledImages';
import { Toggle } from '@/components/private/Toggle/styled';
import React, { useState } from 'react';

export type UseToggleProps = {
  length: number;
  hideLongerThan?: number;
  toggleText?: {
    open: string;
    close: string;
  }
};

export type UseToggleResponse = {
  ToggleButton: React.ReactElement;
  isOpenAtMobile: boolean;
};

// 1. use hook in Main Component
// 2. add Item props of `hideAtMobile={index >= hideLongerThan && !isOpenAtMobile}`
// 3. add ToggleButton returned by this hook in the Main Component
// 4. wrap Items with `ItemToggleAnimationWrapper` from '@/components/private/Toggle/styled'

export const useToggle = ({
  length,
  hideLongerThan = 3,
  toggleText = { open: 'Open', close: 'Close' },
}: UseToggleProps) => {
  const [isOpen, setOpen] = useState(false);
  const text = !isOpen ? toggleText.open : toggleText.close;
  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return {
    ToggleButton: (
      length > hideLongerThan ? (
        <Toggle onClick={toggle} isOpen={isOpen}>
          {text}
          <ActionIcon margin="0 0 0 12px" src="/assets/icon/vertical-arrow.svg" alt="toggle-btn-icon" />
        </Toggle>
      ) : <div />
    ),
    isOpenAtMobile: isOpen,
  };
};

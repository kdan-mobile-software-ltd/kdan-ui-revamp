import { SimpleToggle, ToggleWrapper } from '@/components/private/Toggle/styled';
import React, { useState } from 'react';

export type UseToggleProps = {
  length?: number;
  hideLongerThan?: number;
  toggleText?: {
    open: string;
    close: string;
  }
} | undefined;

export type UseToggleResponse = {
  ToggleButton: React.ReactElement;
  isOpenAtMobile: boolean;
};

// 1. use hook in Main Component
// 2. add Item props of `hideAtMobile={index >= hideLongerThan && !isOpenAtMobile}`
// 3. add ToggleButton returned by this hook in the Main Component
// 4. wrap Items with `ItemToggleAnimationWrapper` from '@/components/private/Toggle/styled'

export const useToggle = (param: UseToggleProps = {
  length: 0,
  hideLongerThan: 3,
  toggleText: { open: '', close: '' },
}):UseToggleResponse => {
  const { length, hideLongerThan, toggleText } = param;
  const [isOpen, setOpen] = useState(false);
  const text = !isOpen ? toggleText?.open : toggleText?.close;
  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return {
    ToggleButton: (
      (!length || length > hideLongerThan) ? (
        <ToggleWrapper>
          {text}
          <SimpleToggle onClick={toggle} isOpen={isOpen} />
        </ToggleWrapper>
      ) : <div />
    ),
    isOpenAtMobile: isOpen,
  };
};

import styled, { css } from 'styled-components';
import {
  BackgroundColorPropsType,
  BorderColorPropsType, CustomCssPropsType, IsOpenPropsType, ThemePropsType,
} from '@/constants/types/styled';
import { body5FontStyle } from '@/constants/fonts';
import { ClearButton, inputBorderStyle } from '../TextField/styled';
import { DropdownCustomStyle } from './types';
import { ActionIcon } from '../Image/styledImages';

export const Wrapper = styled.div<CustomCssPropsType>`
  position: relative;

  ${({ customCss }) => customCss}
`;

export const SelectionWrapper = styled.div<ThemePropsType & BorderColorPropsType & BackgroundColorPropsType>`
  ${inputBorderStyle}
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 12px;
  z-index: 20;
  background-color: ${({ theme: { colors }, backgroundColor }) => backgroundColor || colors.white};
  width: 100%;
  min-height: 56px;
  cursor: pointer;
`;

export const Dropdown = styled.ul<IsOpenPropsType & DropdownCustomStyle & CustomCssPropsType>`
  box-shadow: 0px 0px 12px 0px ${({ theme }) => theme.colors.boxShadow};
  border-radius: 4px;
  overflow: scroll;
  z-index: 100;
  width: 100%;
  max-height: ${({ maxHeight }) => maxHeight || '220px'};
  transition: all ease-in-out .1s;
  cursor: pointer;

  ${({ isOpen }) => (isOpen
    ? css`
      opacity: 1;
      visibility: unset;
    ` : css`
      opacity: 0;
      visibility: hidden;
    `
  )}

  position: absolute;
  left: 0;
  top: ${({ openDirection }) => (openDirection === 'downward' ? '100%' : 'auto')};
  bottom: ${({ openDirection }) => (openDirection === 'upward' ? '100%' : 'auto')};
  ${({ customCss }) => customCss}
`;

export type OptionStyleType = ThemePropsType & CustomCssPropsType & { isBottom?: boolean; };
export const Option = styled.option<OptionStyleType>`
  padding: 10px 12px;
  transition: background-color ease-in-out .1s;
  background-color: ${({ theme }) => theme.colors.white};
  ${body5FontStyle}

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.gray200};
  }

  &.isActive {
    background-color: ${({ theme }) => theme.colors.gray200};
  }
  ${({ customCss }) => customCss}
`;

export const SearchIcon = styled(ActionIcon)`
  filter: invert(50%) sepia(2%) saturate(6%) hue-rotate(314deg) brightness(97%) contrast(80%);
`;

export const SearchWrapper = styled.div<OptionStyleType>`
  border: 1px solid  ${({ theme }) => theme.colors.gray200};
  display: flex;
  align-items: center;
  padding-left: 12px;
  width: 100%;
  border-radius: 4px;
`;

export const CancelAllButton = styled(ClearButton)`
  position: unset;
  bottom: 0;
  right: 0;
  margin-right: 6px;
  *:is(:hover, :focus) + &:not([disabled]), &:is(:hover, :focus):not([disabled]) {
    display: block;
  }
`;

export const ToggleAllWrapper = styled.div<OptionStyleType>`
  padding: 10px 12px;
  color: ${({ theme }) => theme.colors.hyperlink};
  background-color: ${({ theme }) => theme.colors.white};
  
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  
  ${body5FontStyle}
  font-weight: bold;

  ${({ customCss }) => customCss}
`;

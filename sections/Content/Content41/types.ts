import { LayoutNumbersOfColumn } from '@/constants/types/global';
import { ContentItem41CustomStyle, ContentItem41Data } from '../Item/ContentItem41/types';

export type Content41CustomStyle = {
  others?: LayoutNumbersOfColumn;
} & ContentItem41CustomStyle;

export type Content41Data = ContentItem41Data[];

export type Content41Props = {
  data: Content41Data;
  customStyle?: Content41CustomStyle;
};

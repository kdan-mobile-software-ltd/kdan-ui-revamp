import { ImgData, ValueOf } from '@/constants/types/global';
import { HocHyperlinkData } from '@/components/Hyperlink/types';
import { CustomImageSize } from '@/components/Image/styledImages';
import { ContentCustomStyle } from '../Item/ContentItem1/types';

export const ITEM_LAYOUT = {
  RIGHT: 'right',
  RIGHT_ALTERNATING: 'rightAlternating',
  LEFT: 'left',
  LEFT_ALTERNATING: 'leftAlternating',
} as const;

export type ItemLayout = ValueOf<typeof ITEM_LAYOUT>;

export type Item = {
  title: string;
  desc?: string;
  image?: ImgData;
  hyperlink?: HocHyperlinkData;
};

export type Data = Item[];

export type CustomStyle = {
  image?: CustomImageSize;
} & ContentCustomStyle;

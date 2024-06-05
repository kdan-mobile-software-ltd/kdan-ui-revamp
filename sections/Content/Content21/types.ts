import { ImgData, ValueOf } from '@/constants/types/global';
import { HocHyperlinkData } from '@/components/Hyperlink/types';
import { CustomImageSize } from '@/components/Image/styledImages';
import { ContentItem1CustomStyle } from '../Item/ContentItem1/types';

export const ITEM_LAYOUT = {
  RIGHT: 'right',
  RIGHT_ALTERNATING: 'rightAlternating',
  LEFT: 'left',
  LEFT_ALTERNATING: 'leftAlternating',
} as const;

export type Content21ItemLayout = ValueOf<typeof ITEM_LAYOUT>;

export type Content21ItemData = {
  title: string;
  desc?: string;
  image?: ImgData;
  hyperlink?: HocHyperlinkData;
};

export type Content21Data = Content21ItemData[];

export type Content21CustomStyle = {
  image?: CustomImageSize;
} & ContentItem1CustomStyle;

export type Content21Props = {
  data: Content21Data;
  customStyle?: Content21CustomStyle;
  itemLayout?: Content21ItemLayout;
};

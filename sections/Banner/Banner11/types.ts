import { CustomColor } from '@/constants/themes/colors';
import { HocButtonData, ButtonStyle } from '@/components/Button/types';
import { HocHyperlinkData, HyperlinkStyle } from '@/components/Hyperlink/types';
import { ImgData } from '@/constants/types/global';
import { CustomImageSize } from '@/components/Image/styledImages';

export type Banner11Data = {
  title: string;
  desc?: string;
  button1?: HocButtonData;
  button2?: HocButtonData;
  hyperlink?: HocHyperlinkData;
  image: ImgData;
};
export type Banner11CustomStyle = {
  title?: {
    color: CustomColor;
  };
  desc?: {
    color: CustomColor;
  };
  button1?: ButtonStyle;
  button2?: ButtonStyle;
  hyperlink?: HyperlinkStyle;
  image?: CustomImageSize;
};

export type Banner11Props = {
  data: Banner11Data;
  customStyle?: Banner11CustomStyle;
};

import { CustomColor } from '@/constants/themes/colors';
import { HocButtonData, ButtonStyle } from '@/components/Button/types';
import { HocHyperlinkData, HyperlinkStyle } from '@/components/Hyperlink/types';
import { ImgData } from '@/constants/types/global';

export type Banner21CustomStyle = {
  title?: {
    color: CustomColor;
  };
  desc?: {
    color: CustomColor;
  };
  button1?: ButtonStyle;
  button2?: ButtonStyle;
  hyperlink?: HyperlinkStyle;
};

export type Banner21Data = {
  title: string;
  desc?: string;
  button1?: HocButtonData;
  button2?: HocButtonData;
  hyperlink?: HocHyperlinkData;
  image: ImgData;
};

export type Banner21Props = {
  data: Banner21Data;
  customStyle?: Banner21CustomStyle;
};

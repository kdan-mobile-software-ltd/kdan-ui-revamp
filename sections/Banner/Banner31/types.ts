import { CustomColor } from '@/constants/themes/colors';
import { TitleTag, DescTag } from '../tagGuards';
import { ImgData } from '@/constants/types/global';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export type Banner31Data = {
  title: string;
  desc: string;
  rightImage: ImgData;
  leftImage: ImgData;
};

export type Banner31CustomTag = {
  title?: TitleTag;
  desc?: DescTag;
};

export type Banner31CustomStyle = {
  backgroundColor?: CustomColor;
  title?: TextCustomCssProps;
  desc?: TextCustomCssProps;
};

export type Banner31Props = {
  data: Banner31Data;
  customStyle?: Banner31CustomStyle;
  customTag?: Banner31CustomTag;
};

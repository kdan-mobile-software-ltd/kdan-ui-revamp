import { ReactElement } from 'react';
import { CustomColor } from '@/constants/themes/colors';
import { ImgData } from '@/constants/types/global';
import { TextCustomCssProps } from '@/utils/style/textStyle';

export type CustomStyle = {
  wrapper?: {
    maskBackground?: CustomColor;
    modalBackground?: CustomColor;
  };
  title?: TextCustomCssProps;
  desc?: TextCustomCssProps;
};

export type ComponentProps = {
  data: {
    title: string;
    desc?: string;
    image?: ImgData;
  };
  customStyle?: CustomStyle;
  children: ReactElement;
};

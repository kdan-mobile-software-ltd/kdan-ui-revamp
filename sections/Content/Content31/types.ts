import { SliderCustomStyle } from '@/sections/Carousel/Slider/types';
import { ContentItem31CustomStyle, ContentItem31Data } from '../Item/ContentItem31/types';

export type Content31CustomStyle = {
  item?: ContentItem31CustomStyle;
  slider: SliderCustomStyle;
};
export type Content31Data = ContentItem31Data[];

export type Content31Props = {
  data: Content31Data;
  customStyle: Content31CustomStyle;
};

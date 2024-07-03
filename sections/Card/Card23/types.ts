import { SliderCustomStyle } from '@/sections/Carousel/Slider/types';
import { CardItem23Data, CardItem23Style } from '../Item/CardItem23/types';

export type Card23Data = CardItem23Data[];

export type Card23CustomStyle = {
  item?: CardItem23Style;
  slider: SliderCustomStyle;
};

export type Card23Props = {
  data: Card23Data;
  customStyle: Card23CustomStyle;
};

import { SliderCustomStyle } from '@/sections/Carousel/Slider/types';
import { CardItem41Data, CardItem41Style } from '../Item/CardItem41/types';

export type Card41Data = CardItem41Data[];

export type Card41CustomStyle = {
  item?: CardItem41Style;
  slider: SliderCustomStyle;
};

export type Card41Props = {
  data: Card41Data;
  customStyle: Card41CustomStyle;
};

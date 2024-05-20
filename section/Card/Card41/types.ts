import { SliderCustomStyle } from '@/section/Carousel/Slider/types';
import { CardItem41Data, CardItem41Style } from '../Item/CardItem41/types';

export type ComponentProps = {
  data: CardItem41Data[];
  customStyle: {
    item?: CardItem41Style;
    slider: SliderCustomStyle;
  };
};

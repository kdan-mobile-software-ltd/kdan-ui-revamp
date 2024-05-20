import { SliderCustomStyle } from '@/compositions/Carousel/Slider/types';
import { CardItem23Data, CardItem23Style } from '../Item/CardItem23/types';

export type ComponentProps = {
  data: CardItem23Data[];
  customStyle: {
    item?: CardItem23Style;
    slider: SliderCustomStyle;
  };
};

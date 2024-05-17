import { SliderCustomStyle } from '@/compositions/Carousel/Slider/types';
import { ContentItem31CustomStyle, ContentItem31Data } from '../Item/ContentItem31/types';

export type ComponentProps = {
  data: ContentItem31Data[];
  customStyle: {
    item?: ContentItem31CustomStyle;
    slider: SliderCustomStyle;
  };
};

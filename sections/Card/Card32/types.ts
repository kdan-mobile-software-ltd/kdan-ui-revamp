import { CardItem32Data, CardItem32Style } from '../Item/CardItem32/types';

export type Card32Data = CardItem32Data[];

export type Card32CustomStyle = {
  items: CardItem32Style[];
};

export type Card32Props = {
  data: Card32Data;
  customStyle: Card32CustomStyle;
};

import React from 'react';
import Item from './Item';
import { GroupWrapper } from './styled';
import { CustomStyle, Data } from './types';

type Props = {
  data: Data;
  customStyle: CustomStyle
};

const Content21: React.FC<Props> = ({ data, customStyle }) => (
  <GroupWrapper>
    {data.map((item, index) => (
      <Item key={item.title} customStyle={customStyle} data={item} index={index} />
    ))}
  </GroupWrapper>
);
export default Content21;

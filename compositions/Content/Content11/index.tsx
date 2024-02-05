import React from 'react';
import Item from './Item';
import { GroupWrapper } from './styled';
import { ComponentProps } from './types';

const Content11: React.FC<ComponentProps> = ({ data, customStyle }) => (
  <GroupWrapper numberOfRow={customStyle?.others?.numberOfRow}>
    {data.map((item) => (
      <Item key={item.title} data={item} customStyle={customStyle} />
    ))}
  </GroupWrapper>
);
export default Content11;

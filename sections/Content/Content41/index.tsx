import React from 'react';
import { GroupWrapper } from './styled';
import { Content41Props } from './types';
import { ContentItem41 } from '../Item/ContentItem41';

export const Content41: React.FC<Content41Props> = ({ data, customStyle }) => (
  <GroupWrapper numbersOfColumn={customStyle?.others?.numbersOfColumn}>
    {data.map((item) => (
      <ContentItem41
        key={item.title}
        data={item}
        customStyle={customStyle}
      />
    ))}
  </GroupWrapper>
);

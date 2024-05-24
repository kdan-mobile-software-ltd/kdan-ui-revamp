import React from 'react';
import { GroupWrapper } from './styled';
import { ComponentProps } from './types';
import { ContentItem41 } from '../Item/ContentItem41';

export const Content41: React.FC<ComponentProps> = ({ data, customStyle }) => (
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

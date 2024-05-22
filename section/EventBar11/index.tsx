import React from 'react';
import { CustomColor } from '@/constants/themes/colors';
import { ImgData } from '@/constants/types/global';
import { TextCustomCssProps } from '@/utils/style/textStyle';
import { HocHyperlinkData } from '@/components/Hyperlink/types';
import { CustomSizeImage } from '@/components/Image/styledImages';
import { Hyperlink } from '@/components/Hyperlink';
import { Wrapper, Title } from './styled';

type ComponentProps = {
  data: {
    title: string;
    hyperlink: HocHyperlinkData;
    icon: ImgData;
  };
  customStyle?: {
    backgroundColor?: CustomColor;
    title?: TextCustomCssProps;
    hyperlink?: TextCustomCssProps;
  };
};

export const EventBar11: React.FC<ComponentProps> = ({ data, customStyle }) => (
  <Wrapper backgroundColor={customStyle?.backgroundColor}>
    {data.icon.src && (
      <CustomSizeImage
        {...data.icon}
        customStyle={{ height: { default: '40px' }, width: { default: '40px' }, margin: '0 8px 0 0' }}
      />
    )}
    <span>
      <Title fontSize={{ default: 'button3', tablet: 'button4' }} {...customStyle?.title}>
        {data.title}
      </Title>
      {data?.hyperlink && (
        <Hyperlink
          variant="arrow"
          fontSize={{ default: 'button3', tablet: 'button4' }}
          margin="0 0 0 8px"
          fontWeight="500"
          {...data.hyperlink}
          {...customStyle?.hyperlink}
        >
          {data.hyperlink.label}
        </Hyperlink>
      )}
    </span>
  </Wrapper>
);

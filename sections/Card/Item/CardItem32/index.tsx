import React from 'react';
import { css } from 'styled-components';
import { getCustomColorFromTheme } from '@/utils/style';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';
import { CustomSizeImage } from '@/components/Image/styledImages';
import {
  Wrapper, Name, Desc, Price, Aux, Depict,
} from './styled';
import { CardItem32Props } from './types';

export const CardItem32: React.FC<CardItem32Props> = ({ data, customStyle }) => (
  <Wrapper {...customStyle?.wrapper}>
    <Name>
      <Typography
        fontSize={{ default: 'h7' }}
        fontWeight="700"
        textAlign="center"
        {...customStyle?.name}
      >
        {data.name}
      </Typography>
    </Name>

    {data.image?.src && (
      <CustomSizeImage
        {...data.image}
        customStyle={{
          width: { default: 'auto' },
          height: { default: '40px' },
          margin: '0 auto 16px',
        }}
      />
    )}

    {data.desc && (
      <Desc>
        <Typography
          fontSize={{ default: 'body5' }}
          textAlign="center"
          color={getCustomColorFromTheme('gray600')}
          dangerouslySetInnerHTML={{ __html: data.desc }}
        />
      </Desc>
    )}

    {data.price && (
      <Price>
        <Typography
          fontSize={{ default: 'h2' }}
          fontWeight="700"
          margin="8px 0 0"
          {...customStyle?.price}
          dangerouslySetInnerHTML={{ __html: data.price }}
        />

        <Typography
          fontSize={{ default: 'body5' }}
          margin="8px 0 0"
          color={getCustomColorFromTheme('gray800')}
          dangerouslySetInnerHTML={{ __html: ` / ${data.unit}` }}
        />
      </Price>
    )}

    <Button
      size="large"
      corner="square"
      type="button"
      customStyle={{
        maxWidth: '100%',
        customCss: css`
          background-color: ${customStyle?.hyperlink?.backgroundColor};
          color: ${customStyle?.hyperlink?.color};
          min-width: 164px;
          width: auto;
          margin: 0 auto 16px;
        `,
      }}
      onClick={() => window.open(data.hyperlink.href)}
    >
      {data.hyperlink.label}
    </Button>

    {data.aux && (
      <Aux>
        <Typography
          fontSize={{ default: 'body5' }}
          textAlign="center"
          color={getCustomColorFromTheme('gray600')}
        >
          {data.aux}
        </Typography>
      </Aux>
    )}

    {data.depicts?.map((depict) => (
      <Depict key={`${depict[0]}`}>
        <Typography
          fontSize={{ default: 'body5' }}
          dangerouslySetInnerHTML={{ __html: depict }}
        />
      </Depict>
    ))}
  </Wrapper>
);

import { css } from 'styled-components';

export const limitedTextLine = (limitedLines:number) => css`
    display: -webkit-box;
    -webkit-line-clamp: ${limitedLines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
`;

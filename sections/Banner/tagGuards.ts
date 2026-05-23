const VALID_TITLE_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'] as const;
const VALID_DESC_TAGS = ['p', 'span'] as const;

export type TitleTag = typeof VALID_TITLE_TAGS[number];
export type DescTag = typeof VALID_DESC_TAGS[number];

export const isValidTitleTag = (
  tag: unknown,
): tag is TitleTag => VALID_TITLE_TAGS.includes(tag as TitleTag);

export const isValidDescTag = (
  tag: unknown,
): tag is DescTag => VALID_DESC_TAGS.includes(tag as DescTag);

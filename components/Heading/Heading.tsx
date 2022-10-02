import React, { FC } from 'react';
export type TextAlign = 'left' | 'center' | 'right';
export type FontLevel = 1 | 2 | 3 | 4 | 5 | 6;
import { getFontSize, getTextAlign } from 'utils/fonts';

type Props = {
  textAlign: TextAlign;
  content: string;
  level: FontLevel;
};

export const Heading: FC<Props> = ({ textAlign, content, level }) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-5xl mx-auto my-5 ${getFontSize(
      level
    )} ${getTextAlign(textAlign)}`,
  });
  return tag;
};

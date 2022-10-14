import React, { FC } from 'react';
import { getTextAlign, TextAlign } from 'utils/fonts';
import { relativeToAbsoluteUrls } from 'utils/relativeToAbsoluteUrls';

type Props = {
  content: string;
  textAlign: TextAlign;
  textColor: string;
};

export const Paragraph: FC<Props> = ({
  content,
  textAlign = 'left',
  textColor,
}) => {
  return (
    <p
      className={`max-w-5xl mx-auto ${getTextAlign(textAlign)}`}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  );
};

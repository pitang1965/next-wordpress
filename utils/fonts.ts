export type TextAlign = 'left' | 'center' | 'right';
export type FontLevel = 1 | 2 | 3 | 4 | 5 | 6;

export const getTextAlign = (textAlign: TextAlign = 'left') => {
  const textAlignMap = {
    left: 'text-left',
    right: 'text-right',
    center: 'text-center',
  };

  return `${textAlignMap[textAlign]}`;
};

export const getFontSize = (level: FontLevel) => {
  const fontSizeMap = {
    1: 'text-6xl',
    2: 'text-5xl',
    3: 'text-4xl',
    4: 'text-3xl',
    5: 'text-2xl',
    6: 'text-xl',
  };

  return `${fontSizeMap[level]}`;
};

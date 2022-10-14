const separator: string = process.env.NEXT_PUBLIC_WP_URL || '';

export const relativeToAbsoluteUrls = (htmlString = '') =>
  htmlString.split(separator).join('');

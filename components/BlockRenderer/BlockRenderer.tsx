import React, { FC } from 'react';
import { Cover } from 'components/Cover';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { theme } from 'theme';

type Props = {
  blocks: any;
};

export const BlockRenderer: FC<Props> = ({ blocks }) => {
  return blocks?.map((block: any) => {
    switch (block.name) {
      case 'core/paragraph':
        return (
          <Paragraph
            key={block.id}
            content={block.attributes.content}
            textAlign={block.attributes.align}
            textColor={
              theme[block.attributes.textColor] || block.attributes.style?.color?.text
            }
          />
        );
      case 'core/heading':
        return (
          <Heading
            key={block.id}
            textAlign="center"
            content={block.attributes.content}
            level={1}
          />
        );
      case 'core/cover':
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );

      default:
        return <div></div>;
    }
  });
};

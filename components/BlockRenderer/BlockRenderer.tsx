import React, { FC } from 'react';
import { Cover } from 'components/Cover';
import { Heading } from 'components/Heading';

type Props = {
  blocks: any;
};

export const BlockRenderer: FC<Props> = ({ blocks }) => {
  return blocks?.map((block: any) => {
    switch (block.name) {
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

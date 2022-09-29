import React, { FC } from "react";
import { Cover } from "components/Cover";

type Props = {
  blocks: any;
};

export const BlockRenderer: FC<Props> = ({ blocks }) => {
  return blocks.map((block: any) => {
    switch (block.name) {
      case "core/cover":
        return (
          <Cover key={block.id} background={block.attributes.url}>
            core cover
          </Cover>
        );

      default:
        return null;
    }
  });
};

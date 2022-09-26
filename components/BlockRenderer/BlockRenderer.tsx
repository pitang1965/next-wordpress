import React, { FC } from "react";

type Props = {
  blocks: any;
};

export const BlockRenderer: FC<Props> = ({ blocks }) => {
  return blocks.map((block:any) => {
    switch (block.name) {
      case "core/cover":
        return <div key={block.id}>core cover</div>;

      default:
        return null;
    }
  });
};

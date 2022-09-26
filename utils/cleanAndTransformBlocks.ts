import { v4 as uuid } from 'uuid';

export const cleanAndTransformBlocks = (blocksJSON:any) => {
  const blocks = JSON.parse(blocksJSON);
  const deleteKeys = [
    "attributesType",
    "blockType",
    "dynamicContent",
    "originalContent",
    "saveContent",
    "postId",
    "get_parent",
    "order",
  ];

  const removeUnusedDataAndAssignId = (b: any) => {
    b.forEach((block: any) => {
      block.id = uuid();
      deleteKeys.forEach((deleteKey) => {
        delete block[deleteKey];
      });
      if (block.innerBlocks?.length) {
        removeUnusedDataAndAssignId(block.innerBlocks);
      } else {
        delete block.innerBlocks;
      }
    });
  };

  removeUnusedDataAndAssignId(blocks);

  return blocks;
};

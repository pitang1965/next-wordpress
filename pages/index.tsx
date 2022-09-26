import type { NextPage } from "next";
import client from "client";
import { gql } from "@apollo/client";
import { BlockRenderer } from "components/BlockRenderer";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";

type Props = {
  blocks: any;
};

const Home: NextPage<Props> = (props) => {
  console.log("PROPS: ", props);
  return (
    <div>
      <BlockRenderer blocks={props.blocks} />
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            title
            blocksJSON
          }
        }
      }
    `,
  });

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);

  return {
    props: {
      blocks,
    },
  };
};

export default Home;

import type { NextPage } from "next";
import client from "client";
import { gql } from "@apollo/client";

type Props = {
  data: any;
  myexampleprop: string;
};

const Home: NextPage<Props> = (props) => {
  console.log("PROPS: ", props);
  return <div>Next JS &amp; WordPress course.</div>;
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
  return {
    props: {
      blocks: JSON.parse(data.nodeByUri.blocksJSON),
      myexampleprop: "test",
    },
  };
};

export default Home;

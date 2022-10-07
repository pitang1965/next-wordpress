import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { gql } from '@apollo/client';
import client from 'client';
import { cleanAndTransformBlocks } from 'utils/cleanAndTransformBlocks';
import { BlockRenderer } from 'components/BlockRenderer';

type Props = {
  title: any;
  blocks: any;
};

const Page: NextPage<Props> = (props) => {
  console.log('PAGE PROPS: ', props);
  return <div><BlockRenderer blocks={props.blocks} /></div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  });

  return {
    paths: data.pages.nodes.map((page: any) => ({
      params: {
        slug: page.uri.substring(1, page.uri.length - 1).split('/'),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('CONTEXT: ', context);
  const uri =
    typeof context?.params?.slug === 'object'
      ? `/${context?.params?.slug?.join('/')}/`
      : `/${context?.params?.slug}/`;
  console.log('URI: ', uri);
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocksJSON
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);

  return {
    props: {
      title: data.nodeByUri.title,
      blocks,
    },
  };
};

export default Page;

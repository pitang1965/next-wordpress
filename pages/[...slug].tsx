import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { gql } from '@apollo/client';
import client from 'client';

type Props = {
  data: any;
};

const Page: NextPage<Props> = ({ data }) => {
  return <div>page</div>;
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Page;

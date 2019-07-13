import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout/layout';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedData(formatString: "Do MMMM, YYYY")
      body {
        json
      }
    }
  }
`;

const Blog = props => {
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedData}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
    </Layout>
  );
};

export default Blog;

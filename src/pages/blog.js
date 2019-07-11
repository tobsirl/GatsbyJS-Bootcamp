import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout/layout';

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Post will show up here later on</p>
      <ol>
        {posts.allMarkdownRemark.edges.map(post => {
          return (
            <li key={post.node.frontmatter.date}>
              <Link to={`/blog/${post.node.fields.slug}`}>{post.node.frontmatter.title}</Link>
              <p>{post.node.frontmatter.date}</p>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;

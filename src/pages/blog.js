import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout/layout';
import blogStyles from './blog.module.scss';

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedData, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedData(formatString: "Do MMMM, YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Post will show up here later on</p>
      <ol className={blogStyles.posts}>
        {posts.allContentfulBlogPost.edges.map(post => {
          return (
            <li className={blogStyles.post} key={post.node.publishedData}>
              <Link to={`/blog/${post.node.slug}`}>
                {post.node.title}
                <p>{post.node.date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;

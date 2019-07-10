import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;

  return (
    <footer>
      <p>Created by {author}, &copy; 2019</p>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';

const About = () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <Link to="/contact">Contact page</Link>
    </Layout>
  );
};

export default About;

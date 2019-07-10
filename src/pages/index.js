import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';



const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Paul,</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
      <p>
        About me <Link to="/about">About me</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;

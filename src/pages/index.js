import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <div>
      <Header></Header>
      <h1>Hello</h1>
      <h2>I'm Paul,</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
      <p>
        About me <Link to="/about">About me</Link>
      </p>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;

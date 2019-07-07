import React from 'react';
import { Link } from 'gatsby';

import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/contact">Contact page</Link>
      <Footer></Footer>
    </div>
  );
};

export default About;

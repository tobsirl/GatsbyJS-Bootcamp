import React from 'react';
import { Link } from 'gatsby';

import headerStyles from './Header.module.scss';

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <nav>
        <h1>
          <Link className={headerStyles.title} to="/">
            Gatsby Bootcamp
          </Link>
        </h1>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>{' '}
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>{' '}
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>{' '}
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>{' '}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

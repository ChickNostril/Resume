// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

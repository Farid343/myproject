import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router'

const Header = () => {
  return(
     <div className={styles.header}>
      <div className={styles.headerinner}>
        <Link className={styles.Link} to='/'><h1>DEALLERS</h1></Link>
        <div className={styles.pagesLinks}>
          <Link className={styles.homelink} to='/' >COLLECTION</Link>
          <Link className={styles.link} to='/shop'>SHOP</Link>
          <Link className={styles.link} to='/catalogs' >CATALOGS</Link>
          <Link className={styles.link} to='/contact' >CONTACT</Link>
          <Link className={styles.link} to={"/dashboard"}>ADMIN</Link>
        </div>
        <div className={styles.icons}>
          <Link> <i className="bi bi-search"></i></Link>
          <Link to={"/wish"}><i className="bi bi-heart"></i></Link>
          <Link to={"/basket"}><i className="bi bi-bag-check-fill"></i></Link>
        </div>
        <div className={styles.hamburger}><i className="bi bi-list"></i></div>
      </div>
    </div>
  )
};

export default Header

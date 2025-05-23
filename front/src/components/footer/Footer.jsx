import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates sed dolorum excepturi iure eaque, aut unde.
          </p>
        </div>
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul className={styles.links}>
            <div>
            <li>Sell online</li>
            <li>Features</li>
            <li>Shopping cart</li>
            <li>Store builder</li>
            </div>
            <div>
            <li>Mobile commerce</li>
            <li>Dropshipping</li>
            <li>Website development</li>
            </div>
            <div>
            <li>Point of sale</li>
            <li>Hardware</li>
            <li>Software</li>
            </div>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Contact Info</h4>
          <p><i class="bi bi-geo-alt-fill"></i> 203 Fake St. Mountain View, San Francisco, California, USA</p>
          <p><i class="bi bi-telephone-fill"></i> +2 392 3929 210</p>
          <p><i class="bi bi-envelope-fill"></i> emailaddress@domain.com</p>
        </div>
        <div className={styles.section}>
          <h4>Subscribe</h4>
          <form className={styles.form}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              SEND
            </button>
          </form>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright ©2025 All rights reserved | This template is made with <span className={styles.heart}>♥</span> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Colorlib</a>
      </div>
    </footer>
    
  );
}

export default Footer;
import React from 'react'
import styles from './SecFirst.module.css'
const SecFirst = () => {
  return (
    <div className={styles.first}>
    <div className={styles.firsttext}>
      <h1>MADEWELL</h1>
      <h6>Summer Collection</h6>
      <div className={styles.span}>
      <span>1,499</span>
      <span><s>$1,999</s></span>
      </div>
      <div className={styles.firstBtn}>
        <button>SHOP NOW</button>
        <button>SHOP NOW</button>
      </div>
    </div>
    <div className={styles.firstimgbox}></div>
  </div>
  )
}

export default SecFirst
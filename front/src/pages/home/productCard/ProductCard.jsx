import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = ({item}) => {
  return (
    <div className={styles.card}>
        <img src={item.image} alt="" />
        <div className={styles.cardtext}>
          <p>{item.title}</p>
          <h6>Summer collection</h6>
          <span>${item.price}</span>
        </div>
     </div>
  )
}

export default ProductCard
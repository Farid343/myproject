import React, { useEffect } from 'react'
import styles from './SecFourth.module.css'
import ProductCard from '../productCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../../../redux/reducers/productSlice';

const SecFourth = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);
  
    useEffect(() => {
      dispatch(getProductsThunk());
    }, [dispatch]);
  
    if (loading) return <span>YÜKLƏNİR.......</span>;
    if (error) return <span>YÜKLƏMƏ ZAMANI XƏTA BAŞ VERDİ</span>;
  return (
    <div className={styles.fourth}>
        <h1>Collections</h1>
         <div className={styles.container}>
          {data && data.slice(1,4).map((item) => (
           <ProductCard key={item.id} item={item}/>))}
         </div>
    </div>
  )
}

export default SecFourth
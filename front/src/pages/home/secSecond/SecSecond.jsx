import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../productCard/ProductCard';
import styles from './SecSecond.module.css'
import { getProductsThunk } from '../../../redux/reducers/productSlice';
const SecSecond = () => {
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
    <div className={styles.second}>
        <div className={styles.container}>
          {data && data.slice(1,7).map((item) => (
           <ProductCard key={item.id} item={item}/>))}
         </div>
    </div>
  )
}

export default SecSecond
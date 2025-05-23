import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCardThunk, getCategoriesThunk, postCardThunk } from '../../redux/reducers/categorySlice';
import CategoriesCard from './CategoriesCard';
import axios from 'axios';
import styles from './Dashboard.module.css'
const Dashboard = () => {
  const dispatch = useDispatch();

  const [editId, setEditId] = React.useState(null);
    const handleEdit = (item) => {
     setEditId(item._id);
     formik.setValues({
     image: item.image,
     title: item.title,
     price: item.price
  });
};
  const formik = useFormik({
      initialValues: {
      image: "",
      title: "",
      price: "",
    },
    onSubmit: async (values) => {
      if (editId) {
        await axios.put(`http://localhost:5000/dealers/${editId}`, values);
        setEditId(null);
      } else {
        await dispatch(postCardThunk(values));
      }
      dispatch(getCategoriesThunk());
      formik.resetForm();
    },
  });

  const data = useSelector((state) => state.category.products);
  const loading = useSelector((state) => state.category.loading);
  const error = useSelector((state) => state.category.error);

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  const handleDelete= (id) => {
    dispatch(deleteCardThunk(_id));
  };

  if (loading) return <span>YÜKLƏNİR.......</span>;
  if (error) return <span>YÜKLƏMƏ ZAMANI XƏTA BAŞ VERDİ</span>;


  return (
    <div className={styles.dashboard}>
       <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="image">Image:</label>
      <input className={styles.inp}
        id="image"
        name="image"
        type="image"
        onChange={formik.handleChange}
        value={formik.values.image}
      />
      <label htmlFor="title">Title:</label>
      <input className={styles.inp}
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
       <label htmlFor="price">Title:</label>
      <input className={styles.inp}
        id="price"
        name="price"
        type="price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      <button className={styles.btn} type="submit">Submit</button>
    </form>
    <div className={styles.cards}>
      {data && data.length > 0 ? (
        data.map((item) => (
          <CategoriesCard key={item._id} item={item} onDelete={handleDelete} onEdit={handleEdit} />
        ))
      ) : (
        <span>No products found</span>
      )}
    </div>
    </div>
  )
}

export default Dashboard
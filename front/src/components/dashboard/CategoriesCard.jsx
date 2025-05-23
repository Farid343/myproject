import React from 'react'

const CategoriesCard = ({ item, onDelete,onEdit }) => {
  return (
    <div>
          <div >
          <button onClick={() => onDelete(item._id)}>
          <i className="bi bi-trash3-fill"></i>
          </button>
          </div>
          <div >
          <img src={item.image} alt="" />
          <p>{item.title}</p>
          <span>{item.price}</span>
          </div>
    </div>
  )
}

export default CategoriesCard
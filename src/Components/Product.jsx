import React from 'react'
import './Product.css'

const Product = ({products}) => {
  return (
    <div className='container'>
      {products.map((product) => {
        return (
          <div className='card'>
            <img src={product.thumbnail} alt="Avatar" />
            <div className="details">
              <h3>{product.title}</h3>
              <div>{product.price}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Product
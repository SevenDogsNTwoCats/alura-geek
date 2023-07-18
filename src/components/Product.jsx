import React from 'react'

const Product = ({img, title, price}) => {
  return <div className="product-container">
  <img className='product-img' src={img} alt="" />
  <div className="prodct-data">
    <p className="produtc-name">{title}</p>
    <p className="product-price">${price}</p>
    <a href="#" className="product-link ">Ver producto</a>
  </div>
</div>
}

export default Product
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../store/CartSlice';
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state =>state.cart)
  const handleRemove = (productId)=>{
    dispatch(remove(productId))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
          products.map((product)=>(
            <div className='cartCard' key={product.id}>
              <img src={product.image}alt='error' />
              <h5>{product.title}</h5>
              <h5>Rs: {product.price} ₹/-</h5>
              <button className='btn' onClick={()=>handleRemove(product.id)}>Remove Item</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart
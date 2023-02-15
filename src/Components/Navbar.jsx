import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items = useSelector((state)=>state.cart);
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <span className='logo'>Redux Store</span>
        <div>
            <Link className='navlink'  to='/'>Home</Link>
            <Link className='navlink'  to='/cart'>cart</Link>
            <span className='cartcount'>
                Cart Items: {items.length}
            </span>
        </div>
    </div>
  )
}

export default Navbar
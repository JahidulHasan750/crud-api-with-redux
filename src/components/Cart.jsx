import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/CartSlice'

const Cart = () => {

  const dispatch=useDispatch()
  const removeFromCart=(id)=>{
      dispatch(remove(id))
  }
  const products= useSelector(state=>state.cart)
  const cards = products.map((product) => (
    <div className="card w-auto bg-base-300 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={product.image} style={{width:'100px', height:'150px'}} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product.title}</h2>
   
    <p>{product.price}$</p>
    <button onClick={()=>removeFromCart(product.id)}  className="btn btn-error">Remove from cart</button>
  </div>
</div>
  ));
  return (
    <div className=" mt-8 mx-[13%] grid gap-4   ">{cards}</div>
    
  )
}

export default Cart
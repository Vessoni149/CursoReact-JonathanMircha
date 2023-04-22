import React, { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer'
import { ProductItem } from './ProductItem';
import { CartItem } from './CartItem';
import { TYPES } from '../actions/shoppingActions';
export function ShoppingCart(props) {
  const[state,dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const{products,cart} = state;

  const addToCart = (id)=>{
    dispatch({type:TYPES.ADD_TO_CART, payload:id})
    
  }
  const deleteFromCart = (id,all = false)=>{
    if(all){
      dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload:id})
    }else{
      dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload:id})
    }
  }
  const clearCart = ()=>{
    dispatch({type: TYPES.CLEAR_CART})
  }

  return (
    <>
      <h2>Carrito de compras</h2>
      <h3>Prouctos</h3>
      <article className='box grid-responsive'>
        {products.map((product)=> <ProductItem key={product.id} data={product} addToCart={addToCart}></ProductItem>)}
      </article>
        <h3>Carrito</h3>
      <article className='box'>
        <button onClick={clearCart}>Limpiar Carrito</button>
        {
          cart.map((item, index)=> <CartItem key={index} data={item} deleteFromCart={deleteFromCart} ></CartItem>)
        }
      </article>
      
    
    </>
  )
}

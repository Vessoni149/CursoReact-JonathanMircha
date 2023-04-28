import {useSelector, useDispatch} from 'react-redux';
import { ProductItem } from './ProductItem';
import { CartItem } from './CartItem';
import { addToCart, clearCart, delFromCart } from '../actions/shoppingActions';

export function ShoppingCart(props) {
  //Aca en la UI vamos a necesitar en lugar de useReducer, useSelector y dispatch
  const state = useSelector(state => state);
  const dispatch = useDispatch()

  //desestrucrutamos los datos que necesitamos del reducer
  const{products,cart} = state.shopping;



  return (
    <>
      <h2>Carrito de compras</h2>
      <h3>Prouctos</h3>
      <article className='box grid-responsive'>
        {products.map((product)=> <ProductItem 
        key={product.id} 
        data={product} 
        addToCart={()=> dispatch(addToCart(product.id))}>
        </ProductItem>)}
      </article>
        <h3>Carrito</h3>
      <article className='box'>
        <button onClick={()=> dispatch(clearCart())}>Limpiar Carrito</button>
        {
          cart.map((item, index)=> <CartItem 
          key={index} 
          data={item} 
          delOneFromCart={()=> dispatch(delFromCart(item.id))} 
          delAllFromCart={()=> dispatch(delFromCart(item.id, true))}></CartItem>)
        }
      </article>
      
    
    </>
  )
}

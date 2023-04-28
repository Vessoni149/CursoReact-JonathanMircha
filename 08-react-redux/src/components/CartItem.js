import React from 'react'

export function CartItem({data,delOneFromCart, delAllFromCart}) {
  
  let {id,name,price,quantity} = data;

  return (
    <div style={{borderBottom:"thin solid grey"}}>
      <h4>{name}</h4>
      <h5>${price}.00 x {quantity} = ${price*quantity}</h5>

      <button onClick={()=>delOneFromCart(id)}>Eliminar Uno</button>
      <button onClick={()=>delAllFromCart(id, true)}>Eliminar Todos</button>
    </div>
  )
}

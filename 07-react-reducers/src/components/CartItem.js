import React from 'react'

export function CartItem({data,deleteFromCart}) {
  
  let {id,name,price,quantity} = data;

  return (
    <div style={{borderBottom:"thin solid grey"}}>
      <h4>{name}</h4>
      <h5>${price}.00 x {quantity} = ${price*quantity}</h5>

      <button onClick={()=>deleteFromCart(id)}>Eliminar Uno</button>
      <button onClick={()=>deleteFromCart(id, true)}>Eliminar Todos</button>
    </div>
  )
}

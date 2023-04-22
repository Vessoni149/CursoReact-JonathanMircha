import React from 'react'

export function ProductItem({data,addToCart}) {
  
  let {id,name,price} = data;


  return (
    <div style={{border:"thin solid grey", padding:"1rem"}}>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={()=>addToCart(id)}>Agregar</button>
    </div>
  )
}

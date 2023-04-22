import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
export function ProtectedRoute({children, isAllowed, redirectTo="/landing"}) {
  if (!isAllowed){
    return <Navigate to={redirectTo}></Navigate>
  }

  return (
    // children
    children ? children : <Outlet></Outlet>
    // Si hay un children devolvelo, sino retorna Outlet
    )
}

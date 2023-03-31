//Estos componenetes deberian ir en archivos diferentes, se ponen en el mismo solo para un mejor entendimiento.
function Login(){
  return(
    <div>
      <h3>Login</h3>
    </div>
  )
}
function Logout(){
  return(
    <div>
      <h3>Logout</h3>
    </div>
  )
}


export default function RenderizadoCondicional (){
  let session = false;
    return(
      <div>
        <h2>Renderizado Condicional</h2>
        {session? <Login/>: <Logout/>}
      </div>
    )
  
}
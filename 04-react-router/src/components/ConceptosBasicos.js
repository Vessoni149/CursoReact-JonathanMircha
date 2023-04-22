import React from 'react'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";  //Como buena practica se le da un alias al BrowserRouter, es muy largo.
import { Landing, Home, DashboardPage, Analytics, Admin } from './Paginas';
import { useState } from 'react';
import { Navigation } from './Navigation';
import { ProtectedRoute } from './ProtectedRoute';
export function ConceptosBasicos(props) {
  
  const [user, setUser] = useState(null);

  const login = ()=>{
    setUser({
      id:1,
      name: "Jhon",
      permissions: ['analize'],
      roles: ["admin"]
    })
  }
  const logout = ()=>{
    setUser(null)
  }

  return (
    <>
      <h2>Conceptos básicos react router dom</h2>
      <p>El curso de Jonatan Mircha está desactualizado respecto a react router, por ello me guiaré por el video explicativo del canal de TY "Fazt" que explica el manejo de React Router v6.</p>
      <p>Primero hay que crear un componente BrowserRouter con el alias Router, que va a envolver las rutas.</p>
      <p>Luego dentro de Router crear otro envoltorio llamado Routes. Y dentro de ese Routes van a ir las rutas (Route).
        El orden sería Router - Routes - Route.
      </p>
      <p>El elemento Route tiene la propiedad path que es la url que va a cargar. También puede usarse "index" que va a especificar que componente se cargará primero, si no se usa, será por defecto "/". Igualmente hay que usar el path luego para que se pueda navegar de vuelta a esa ruta, como vemos en las primeras 2 rutas.
        Y tiene la propiedad "element" que es el componente que va a renderizar.
      </p>
      <p>Una vez que tenemos las primeras rutas configuradas, una home (/) y alguna otra, si en el navegador ponemos por ej: localhost:3000/landing ya ceremos funcionando la ruta.</p>
      
      <p>Una vez creadas las rutas tenemos que hacernas navegables, para poder usarlas sin andar modificando la url.</p>
      <p>En el componente navigation cree una barra de navegacion que importa el componente Link de react-browser-router. Y ahí se especifican los links que van a direccionar a las distintas urls. Muy importante importar ese componente DENTRO de el BrouserRouter o Router</p>

      <p>Vamos a simular un login. En un principio, para eso creamos un estado user en ConceptosBasicos y validamos si existe o no  en el componente Home y dependiendo de eso mostramos el boton de login o de logout.
        Para vincularlo con el componente Home, le vamos a pasar ese estado "user" como prop y allí validaremos si existe o no el user. Si no existe vamos a retornar el componente Navigate, que es un compo de React que sirve para redireccionar. En este caso redireccionamos a Landing. Si el usuario existe se renderiza el contenido de Home.
        La antedicha validacion no es muy escalable si queremos tener varais rutas protegidas, entonces crearemos otro componente que valide eso (ProtecteRoute). Este componente encolvera a Home dentro de la propiedad "element", y para poder hacer eso necesitamos usar la propiead children y tambien user porque allí haremos la validacion.
        Entonces si miramos el archivo ProtectedRoute veremos que validamos si el user (recibido como prop) existe y en caso negativo usamos el compo Navigate para redireccionar a landing. Si existe, retornamos el children, que como se vé en el compo ConceptosBasicos será Home.

        Ademaás para que el componente ProtectedRoute pueda redireccionar a varios lugares, vamos a crear una propiedad redirectTo que por defecto sera landing, pero que cuando usemos el componente la podemos cambiar para que direccione a otro sitio.

        Por otro lado: si queremos proteger varair rutas con la misma lógica (ej si el usuario esta logueado) tendremos que usar varios ProtectedRoute y a todos asarle la prop user y ademas la propr redirectTo si la necestia, lo cual podria ser tedioso si tenemos muchar rutas.
        Para esos casos hay un componente deReact llamado Outlet, en el que podemos englobar muchas rutas. Lo que haria que hacer es hacer que ProtectedRoute retorne en vez de children ese componente Outlet.
        Ahora lo que haremos es a las 2 rutas que queremos que estén protegidas, les sacamos el protectedRoute y las ponemos dentro de otro Route, el cual va a tener como element a ProtectedRoute. Es como crear una capa poniendo las rutas dentro de una ruta padre. Si queremos proteger alguna otra ruta con esa misma logica del ProtectedRoute solo la ponemos dentro de esa nueva Route con el element ProtectedRoute.
      </p>
<hr></hr>
      <Router>
      <Navigation></Navigation>
      {user ? (
        <button onClick={logout}>Logout</button>
      ): 
      <button onClick={login}>login</button>}
      
        <Routes>

          <Route index element={<Landing/>}>
          </Route>

          <Route path='/landing' element={<Landing/>}>
          </Route>

{/* Usando protectedRoute varias veces: */}
          {/* <Route path='/home' 
          element={<ProtectedRoute user={user}>
            <Home/>
          </ProtectedRoute>
          }>
          </Route>

          <Route path='/dashboard' element={
          <ProtectedRoute user={user}>
            <DashboardPage/>
          </ProtectedRoute>
          }>
          </Route> */}


{/* Usando Outlet para evitar repeticion de ProtectedRoute: 
En esta Route isAllowed va a validar solo si user existe*/}
          <Route element={<ProtectedRoute isAllowed={!!user}></ProtectedRoute>}>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/dashboard' element={<DashboardPage/>}></Route>
          </Route>
{/* Y acá vamos a proteger una ruta indiviral, fuera del Route protegido, pero tambine con ProtectedRoute. Pero como éste retorna un Outlet, en ppio no nos va a retornar children como queremos, entonces lo que debemos hacer es en el componente hacer una validacion. 
Aca vamos a validar con la prop isAllowed si el usuario existe y si tiene permiso*/}
          <Route path='/analytics' element={
              <ProtectedRoute 
              isAllowed={!!user && user.permissions.includes('analize')} 
              redirectTo='/home'>
              <Analytics/>
            </ProtectedRoute>
          }/>

          
          <Route path='/admin' element={
          <ProtectedRoute 
          isAllowed={!!user && user.roles.includes('admin')}
          redirectTo='/home'>
            <Admin></Admin>
          </ProtectedRoute>}></Route>
          
            

        </Routes>
      </Router>

      
    </>
  )
}



//si vamos a tener el scc en un archivo css, se importa el archivo y ya, el archivo css debe tener el mismo nombre que el archivo js por convencion.
import './Estilos.css'
import moduleStyles from './Estilos.module.css';
import "./Estilos.scss"
export function Estilos(){
  let myStyles ={
    borderRadius:".24rem", 
    margin:"1rem",
    maxWidth: "50%",
    backgroundColor:"brown"
  }
  return(
    // estilos importados
    <section className="estilos">
      <h2>Estilos css en react.</h2>
      <h3 className="bg-react">Estilo css en hoja externa</h3>

      {/* Estilos en linea */}
      {/* se escriben como si fuera un objeto */}
      <h3 className="bg-react" style={{borderRadius:".24rem", margin:"1rem"}}>Estilo en linea</h3>

      <h3 style={myStyles}>Estilo en linea pero usando una variable</h3>

      
      <h3 className={moduleStyles.error}>Estilo importado como modulo</h3>
      <h3 className={moduleStyles.success}>Estilo importado como modulo</h3>

    
    <h3 className='bg-sass'>Estilos con SASS</h3>

    </section>
  )
}

//para hacer este archivo instale styled-components (npm install --save styled-components), y baje la extension "style-components-snippets" de jon wheeler

import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from "styled-components";
import { Propiedades } from "../componentesDeClase1/Propiedades";
//css es para usar styled components dentro de una funcion en styled components, keyframes para animaciones, ThemeProvider para crear contextos (light y dark x ej), y globlaStyle para estilos globales (lo ideal es usarlo en el ocmponenet ppal, en Index.js pero para que quede todo en un archivo lo hago aca.)

export function ComponentesEstilizados(){
  let mainColor = "#db7093",
  mainAlphaColor89 = "#db709380";

  //creo una funcion que se ejecutara dentro el estilo.
  const setTransitionTime = (time)=> `all ${time} ease-in-out`;

  //creando animaciones:
  const fadeIn = keyframes`
    0%{
      opacity: 0;
    }100%{
      opacity: 1;
      };
    `;

  const MyH3 = styled.h3`
  padding: 2rem;
  text-align:center;
  background-color: ${mainColor};
  transition: ${setTransitionTime("1s")};

  /* uso de props: */
  /* color: ${(props) => props.color}; */

  /* otra forma e uso de props es desestructurando las props: */
  /* color: ${({color}) => color}; */

  /* Renderizado condicional: */
  color: ${({color}) => color || "#000"};

  /* caso de varias propiedades en un condicional: */
  ${(props)=> props.isButton && css`
  margin: auto;
  max-width: 50%;
  border-radius: 10px;
  cursor: pointer;
  color: #356273;
  `}

  //aplicando animacion:
  animation: ${fadeIn} 2s ease-out;

  //al igual que en sass se puede usar el & dentro del mismo seleccionador
  &:hover{
    background-color: ${mainAlphaColor89};
  }
  `;

const light ={
  color: "#222",
  bgColor:"#DDD"
}
const dark ={
  bgColor: "#222",
  color:"#DDD"
}
const Box = styled.div`
padding: 1rem;
margin: 1rem;
color: ${({theme})=> theme.color};
background-color: ${({theme})=> theme.bgColor};
;
`

// herencia con styled component
//aca esta heredando todas las propiedades de Box y se le añade borde
const BoxRounded = styled(Box)`
  border-radius: 1rem;
`

//GlobalStyle es un componenete que hay que renderizar
const GlobalStyle = createGlobalStyle`
h2{
  padding: 2rem;
  background-color: #fff;
  color:#61dafb;
  text-transform: uppercase;
  }`
//Se aplicara a toods los h2 de la pagina, independientemente de en qué componente esté-


  return(
    <>
    <GlobalStyle></GlobalStyle>
      <h2>Librería Styled components</h2>
      <MyH3>h3 estilizado con style-components</MyH3>
      <MyH3 color="#61dafb">h3 estilizado con style-components</MyH3>
      <MyH3 isButton={true}>Soy un h3 estilizado como boton</MyH3>
      {/* ThemeProvider es un contexto, una etiqueta que envuelve. tiene la propiedad theme que dentro puede tener propiedades css o una variable que las contenga.*/}
      <ThemeProvider theme={light}>
        <Box>Soy una caja light</Box>
        <BoxRounded>Soy una caja redondeada light</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy una caja dark</Box>
        <BoxRounded>Soy una caja redondeada dark</BoxRounded>
      </ThemeProvider>
    </>
  )
}
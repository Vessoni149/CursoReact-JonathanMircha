import { useState,useEffect } from "react";

function Reloj({hora}){
  return <h3>{hora}</h3>
}

export function RelojHooks(){
  const [hour,setHour] = useState(new Date().toLocaleTimeString())
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    let temporizador;
    if(visible){
      temporizador = setInterval(()=>{
        setHour(new Date().toLocaleTimeString())
      },1000);
    }else{
      clearInterval(temporizador);
    }
    return ()=>{
      console.log("fase de desmontaje");
      clearInterval(temporizador);
    }
  },[visible])
  
  return(
    <>
    <h2>Reloj con hooks</h2>
    {visible && <Reloj hora={hour}></Reloj>}
      
      <button onClick={()=> setVisible(true)}>Iniciar</button>
      <button onClick={()=> setVisible(false)}>Detener</button>

    </>
  )
}
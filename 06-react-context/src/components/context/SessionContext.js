import { createContext } from "react";
import { useState } from "react";
const SessionContext = createContext();

const SessionProvider = ({children})=>{

  const initialSession = true;
  const [session, setSession] = useState(initialSession);
  

  const handleSession = (e)=>{
    if(session){
      setSession(null);
    }else{
      setSession(true);
    }
  }

  const data = {
    session,
    handleSession
  }

  return(
    <SessionContext.Provider value={data}>
      {children}
    </SessionContext.Provider>
  )
}

export {SessionProvider};
export default SessionContext;
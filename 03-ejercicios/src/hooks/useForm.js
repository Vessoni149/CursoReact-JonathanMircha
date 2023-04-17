import { useState } from "react";
import {helpHttp} from '../helpers/helpHttp';
export function useForm(initialForm, validateForm) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e)=>{
    //Acá es lo mismo que he hecho en otros ejercicios pero desescructuro el name y value ya que ambos son propiedades de e.target
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleBlur = (e)=>{
    handleChange(e);
    setErrors(validateForm(form));
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setErrors(validateForm(form));
    //si el objeto de errores no tiene propiedades:
    if(Object.keys(errors).length === 0){
    
      setLoading(true);
      helpHttp()
      .post("https://formsubmit.co/ajax/developvess@gmail.com",
      {
        body: form,
        headers:{
          "Content-Type": "application/json",
          "Accept":"Application/json",
        },
      })
      .then(res=>{
        setLoading(false);
        //setResponse guarda si la respuesta se envio 
        setResponse(true);
        setForm(initialForm);
        setTimeout(()=>{
          setResponse(false)
        }, 2000)
      })
    }else{
      return
    }
  }

  return {
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit
  }
}

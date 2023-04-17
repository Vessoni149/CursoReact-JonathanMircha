import React from 'react'
import {useForm} from '../hooks/useForm'
import {Loader} from '../components/Loader'
import {Message} from './Message'
export function ContactForm(props) {
  const initialForm={
    name:"",
    email:"",
    subject:"",
    comments:""
  };
  const validationsForm = (form)=>{
    let errors = {};
    //Expresiones regulares:
    //La primera valida que solo se acepte letras mayus y min, y algunos caracteres ajenos al ingles y espacios en blanco
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    //La segunda valida que el mail sea valido.
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    //la ultima cuenta que los caracteres de la caja de comentarios vaya de 1 a 256
    let regexComments = /^.{1,255}$/;

    if(!form.name.trim()){
      errors.name = "El campo 'Nombre' es requerido"
    }else if(!regexName.test(form.name.trim())){  //Cuando la expr reg no coincida con lo que viene del form...
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
    }

    if(!form.email.trim()){
      errors.email = "El campo 'Email' es requerido"
    }else if(!regexEmail.test(form.email.trim())){  //Cuando la expr reg no coincida con lo que viene del form...
      errors.email = "El campo 'Email' es incorrecto";
    }

    if(!form.subject.trim()){
      errors.subject = "El campo 'Asunto a tratar' es requerido"
    }

    if(!form.comments.trim()){
      errors.comments = "El campo 'Comentarios' es requerido"
    }else if(!regexComments.test(form.comments.trim())){  //Cuando la expr reg no coincida con lo que viene del form...
      errors.Comments = "El cmapo 'Comentarios' no debe exceder de 255 caracteres";
    }

    return errors;
  }
 
  let styles = {
    fontWeight:"bold",
    color:"#dc3545"
  }

  //acá desestructuro todos los valores y funciones que retorna el useForm
  const {  
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit} = useForm(initialForm,validationsForm);

  return (
    <>
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        name="name" 
        placeholder='Escribe tu nombre' onChange={handleChange} 
        onBlur={handleBlur} 
        value={form.name} 
        required/>

        {errors.name && <p style={styles}>{errors.name}</p>}

        <input 
        type='email' 
        name="email" 
        placeholder='Escribe tu email' 
        onChange={handleChange} 
        onBlur={handleBlur} 
        value={form.email} 
        required/>

        {errors.email && <p style={styles}>{errors.email}</p>}

        <input 
        type='text' 
        name="subject" 
        placeholder='Asunto a tratar' 
        onChange={handleChange} 
        onBlur={handleBlur} 
        value={form.subject} //el value tiene que coincidir con el name
        required/>

        {errors.subject && <p style={styles}>{errors.subject}</p>}

        <textarea name="comments" 
        cols="50" 
        rows="5" 
        placeholder='Escribe tus comentarios' onChange={handleChange} 
        onBlur={handleBlur} 
        value={form.comments}/>

        {errors.comments && <p style={styles}>{errors.comments}</p>}

        <input type='submit' value="Enviar"/>

      </form>

      {loading && <Loader></Loader>}
      {response && <Message 
      msg="Los datos han sido enviados" 
      bgColor="#198754"/>}

    </>
  )
}

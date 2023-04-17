
import { useFetch } from "../hooks/useFetch";
import {Loader} from "./Loader";
import {Message} from "./Message";

export const SelectList = ({ title, url, handleChange }) => {
  //useFetch()
  const { data, error, loading } = useFetch(url);
  console.log(data, error, loading);

  //si data no tiene valor o es nulla , que se retorne un null para que no se renderice nada.
  if (!data) return null;

  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data.response[title];//Dado que hay que hacer 3 peticiones, en options guardaremos dinamicamente una parte de la url de la peticion que equivaldrá al valor title de los inputs.
  // si se utiliza data.response.title, se espera que la respuesta de la petición tenga una propiedad llamada "title". Sin embargo, en el caso de data.response[title], se espera que la respuesta tenga una propiedad cuyo nombre es igual al valor de la variable title.
  // En el código dado, se utiliza data.response[title] porque el nombre de la propiedad que se desea acceder depende de la prop que se pasó a SelectList como title.
  // console.log(options);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data &&
          options.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
      </select>
    </>
  );
};


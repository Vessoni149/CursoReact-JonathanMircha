import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);

      try {
        
        const res = await fetch(url, { signal });
//ok es una propiedad de la respuesta
        if (!res.ok) {
          let err = new Error("Error en la petición Fetch");
          //status y statusText tmb son propiedades de la respuesta, si la api tiene un mensaje x defecto lo mostramos, sino se muestra el string que le indicamos.
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrió un error";
          throw err;//el throw es el return para capturar errores.
        }

        const json = await res.json();

        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {   
        //este objeto de error es el que configure mas arriba.
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
};
import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {CrudForm} from "../crud/CrudForm";
import {CrudTable} from "../crud/CrudTable";
import {Loader} from "../crud/Loader";
import {Message} from "../crud/Message";
import { helpHttp } from '../../helpers/helpHttp'
import { createAction, deleteAction, noAction, readAllAction, updateAction } from "../../actions/crudActions";
const CrudApi = () => {
  //const [db, setDb] = useState(null);
  //useSelector es para acceder al estado ppal de redux. Específicamente hace referencia a "reducer" de index.js en la carpeta de reducers, que es el reducer que engloba a todas als funciones reductoras, por ello por ej, aldesestrudturar db se lo hace de state.crud.
  const state = useSelector(state=> state);
  const dispatch = useDispatch();

  const { db } = state.crud;
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  //Las funciones reductoras son puras, no se meten con peticiones asincronas, entonces esa funcionalidad va a quedar en este archivo.
  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          //setDb(res);
          dispatch(readAllAction(res));
          setError(null);
        } else {
          //setDb(null);
          dispatch(noAction());
          setError(res);
        }
        setLoading(false);
      });
  }, [url,dispatch]);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        //setDb([...db, res]);
        dispatch(createAction(res));
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        //let newData = db.map((el) => (el.id === data.id ? data : el));
        //setDb(newData)
        dispatch(updateAction(res));
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          //let newData = db.filter((el) => el.id !== id);
          //setDb(newData);
          dispatch(deleteAction(id));
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
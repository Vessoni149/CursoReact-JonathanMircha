import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};
//Para evitar wrnings en la consola es conveniente definir el form con sus valores. Y guardarlo en un estado.

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    //setForm toma una copia del objeto form con el spread operator, y le agrega del evento, la propiedad name (asignada dinamicamente con [], osea que va a ser artist o song en este caso, ya que tenemos 2 inputs con esos nombres), que va a tener el valor de e.target.value 
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Datos Incompletos");
      return;
      //se retorna para que no siga leyendo los 2 metodos de abajo
    }
    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del Intérprete"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la Canción"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default SongForm;
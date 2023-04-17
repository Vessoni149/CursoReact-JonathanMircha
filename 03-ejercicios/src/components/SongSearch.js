import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import {Loader} from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return; //si es null se sale de la ejecucion del useEffect

    //creamos una funcion asyncrona aca ya que es un antipatron que la funcion que recie como primer parametro el useEffect sea asincrona. Al final del useEff ésta funcion se ejecutará.
    const fetchData = async () => {
      const { artist, song } = search;  //desestructuramos las propiedades que tiene el search.

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      //console.log(artistUrl, songUrl);

      setLoading(true);

      //await Promise.all espera las respuestas de todas las url que le pasemos en un array. Y guardaremos las respuestas en 2 variables dinámicas gracias a la desestructuracion.
      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      //console.log(artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h2>Song Search</h2>
      <p>(La API a la que se hace peticion para encontrar la canción ya no sirve)</p>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search && !loading && (
          <SongDetails search={search} lyric={lyric} bio={bio} />
        )}
      </article>
    </div>
  );
};

export default SongSearch;
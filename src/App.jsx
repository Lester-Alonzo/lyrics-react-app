import { useState, useEffect } from "react";
import axios from "axios";
import Formulario from "./components/Formulairo";
import Cancion from "./components/Cancion";

function App() {
  //definir el state
  const [busquedaLtra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");
  useEffect(() => {
    if (Object.keys(busquedaLtra).length === 0) return;
    try {
      const consultarApi = async () => {
        const { artista, cancion } = busquedaLtra;
        const apiletra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const apiinfo = `theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

        const [letra, informacion] = await Promise.all([
          axios(apiletra),
          axios(apiinfo),
        ]);

        console.log(letra);
        console.log(informacion);
        // guardarLetra(resultado.data.lyrics);
      };
      consultarApi();
    } catch (error) {
      console.error(`ESTE ES EL ERROR: ${error}`);
    }
  }, [busquedaLtra]);
  return (
    <>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

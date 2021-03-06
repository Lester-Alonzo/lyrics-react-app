import { useState, useEffect } from "react";
import axios from "axios";
import Formulario from "./components/Formulairo";
import Cancion from "./components/Cancion";
import Info from "./components/Info";

function App() {
  //definir el state
  const [busquedaLtra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");
  const [info, guardarInfo] = useState({});
  useEffect(() => {
    if (Object.keys(busquedaLtra).length === 0) return;
    try {
      const consultarApi = async () => {
        const { artista, cancion } = busquedaLtra;
        const apiletra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const apiinfo = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista} `;
        const [informacion, letra] = await Promise.all([
          axios(apiinfo),
          axios(apiletra),
        ]);
        guardarLetra(letra.data.lyrics);
        guardarInfo(informacion.data.artists[0]);
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
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import ListaTarjetas from "./ListaTarjetas";

function TraerPersonas() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/personas")
      .then((res) => res.json())
      .then((data) => setPersonas(data))
      .catch((err) => console.error("Error al traer personas:", err));
  }, []);

  return (
    <div>
      <h2>Listado de Personas</h2>
      <ListaTarjetas personas={personas} />
    </div>
  );
}

export default TraerPersonas;
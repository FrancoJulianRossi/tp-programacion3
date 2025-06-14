import TarjetaPersona from "./TarjetaPersona";

function ListaTarjetas({ personas }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {personas.map((persona) => (
        <TarjetaPersona key={persona.id} persona={persona} />
      ))}
    </div>
  );
}

export default ListaTarjetas;
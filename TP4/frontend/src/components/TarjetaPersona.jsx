function TarjetaPersona({ persona }) {
  const { nombre, apellido, edad, email } = persona;

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "1rem",
      width: "200px",
      boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h3>{nombre} {apellido}</h3>
      <p><strong>Edad:</strong> {edad}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default TarjetaPersona;
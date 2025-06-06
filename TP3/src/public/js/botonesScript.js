//button#registrar Registar paciente
//button#verTurnos Ver Turnos
//button#agregarTurno Agregar Turno
//button#borrarTurno Borrar Turno
//button#borrarPaciente Borrar Paciente

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("registrar");
  if (btn) {
    btn.addEventListener("click", () => {
      window.location.href = "/web/registrar";
    });
  }
});
const turnosModel = require("./../../models/mock/turnos.models.js");
const Turnos = require("./../../models/mock/entities/turno.entity.js"); 


const turnosController={
  getTurnosId: async (req, res) => {
    const id = req.params.id;
    try {
      const turno = await turnosModel.getTurnoByPacienteId(id);
      if (turno) {
        res.status(200).json(turno);
      } else {
        res.status(404).json({ message: `Turno con ID ${id} no encontrado` });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteTurno: async (req, res) => {
    const id = req.params.id;
    try {
      const turnoBorrado = await turnosModel.deleteTurno(id);
      if (turnoBorrado) {
        res.status(200).json(turnoBorrado);
      } else {
        res.status(404).json({ message: `Turno con ID ${id} no encontrado` });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  crearTurno: async (req, res) => {
    const { idPaciente, fecha } = req.body;
    try {
      if (!idPaciente || !fecha) {
        return res.status(400).json({ message: "Faltan datos para crear el turno" });
      }
      const nuevoTurno = new Turnos(null, idPaciente, fecha);
      const turnoCreado = await turnosModel.crearTurno(nuevoTurno);
      res.status(201).json(turnoCreado);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = turnosController;
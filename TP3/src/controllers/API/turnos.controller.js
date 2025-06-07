const turnosModel = require("./../../models/mock/turnos.models.js");
const Turnos = require("./../../models/mock/entities/turno.entity.js"); 


class turnosController {
  async listarTurnos(req, res) {
    res.status(200).json(await turnosModel.list());
  }
  async getTurnosId(req, res) {
    const pacienteId = parseInt(req.params.pacienteId);
    try {
      const turnos = await turnosModel.getTurnoByPacienteId(pacienteId);
      if(turnos.length === 0) {
          return res.status(404).json({message: "No se encontraron turnos del paciente: " + pacienteId});
      }
      res.status(200).json(turnos);
    } catch (error) {
      res.status(500).json({message: "Error al obtener los turnos del paciente",
      error:error.message});
    }
  }
  async deleteTurno(req, res){
    const id = req.params.id;
    turnosModel.deleteTurno(id);
    res.status(200).json({message :"Turno borrado"});
  }
  async crearTurno (req, res){
    const { fecha,pacienteId,motivo,estado} = req.body;
    const nuevoTurno = new Turno(fecha,pacienteId,motivo,estado);
    const info = await turnosModel.crearTurno(nuevoTurno);
    res.status(200).json(info);
  }
}

module.exports = new turnosController();
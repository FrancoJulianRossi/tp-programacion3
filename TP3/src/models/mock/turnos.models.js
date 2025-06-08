const Turno = require("./../mock/entities/turno.entity.js");

class TurnosModel {
    constructor() {
        this.data = [];
        this.data.push(
            new Turno(1, 1, "2023-10-01T10:00:00Z", "disponible"),
        );
        this.id = 2;
    }
    crearTurno(turno) {
        return new Promise((resolve, reject) => {
            try {
                turno.id = this.id++;
                this.data.push(turno);
                resolve(turno);
            } catch (error) {
                reject(error);
            }
        });
    }
    getTurnoByPacienteId(idPaciente) {
        return new Promise((resolve, reject) => {
            try {
                const turnos = this.data.filter(turno => turno.idPaciente === idPaciente);
                if (turnos.length === 0) {
                    throw new Error("No se encontraron turnos para el paciente con id: " + idPaciente);
                }
                resolve(turnos);
            } catch (error) {
                reject(error);
            }
        });
    }
    CancelarTurno(id) {
        return new Promise((resolve, reject) => {
            const numeroId = parseInt(id, 10);
            if (isNaN(numeroId)) {
                return reject(new Error("El id no es un numero"));
            }
            const turnoEncontrado = this.data.find((t) => t.id === numeroId);
            if (!turnoEncontrado) {
                return reject(new Error(`El id ${numeroId} no fue encontrado`));
            }
            if (turnoEncontrado.estado === "disponible") {
                return reject(new Error(`El turno con id ${numeroId} está disponible`));
            }
            turnoEncontrado.estado = "disponible";
            resolve({
                message: "Turno cancelado exitosamente"
            });
        });
    }
    listarTurnos() {
        return new Promise((resolve, reject) => {
            resolve(this.data);
        });
    }
    getTurnoById(id) {
        return new Promise((resolve, reject) => {
            const numeroId = parseInt(id, 10);
            if (isNaN(numeroId)) {
                return reject(new Error("El id no es un numero"));
            }
            const turnoEncontrado = this.data.find(t => t.id === numeroId);
            if (!turnoEncontrado) {
                return reject(new Error(`Turno con id ${numeroId} no encontrado`));
            }
            resolve(turnoEncontrado);
        });
    }
}
module.exports = new TurnosModel();
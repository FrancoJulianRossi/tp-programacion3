const Turno = require("./../mock/entities/turno.entity.js");
const Persona = require("./../mock/entities/paciente.entity.js");
const Config = require("./../../config/config.js");

class TurnosModel {
    constructor() {
        this.data = [];
        const paciente =new Persona(
        "123456787",
        "Sergio",
        "Antozzi",
        "email@gmail.com",
        "12345",
        1
      );
        this.data.push(
            new Turno(1, paciente.id, "2023-10-01T10:00:00Z")
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
    getTurnoByPacienteId({idPaciente}) {
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
    deleteTurno(id) {
        return new Promise((resolve, reject) => {
            try {
                const turnoEncontrado = this.data.find(turno => turno.id === id);
                if (!turnoEncontrado) {
                    throw new Error("Turno no encontrado");
                }
                const pos = this.data.indexOf(turnoEncontrado);
                this.data.splice(pos, 1);
                resolve(turnoEncontrado);
            } catch (error) {
                reject(error);
            }
        });
    }
}
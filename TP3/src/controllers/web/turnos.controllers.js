const turnoModel = require('../../models/mock/turnos.models.js');
const pacienteModel = require('../../models/mock/pacientes.models.js');
const Turno = require('../../models/mock/entities/turno.entity.js');

class TurnosWebController {
    async listarTurnos(req, res) {
        try {
            const turnos = await turnoModel.list();
            res.render('turnos/list', { // <-- ya no 'ejs/turnos/list'
                turnos,
                title: 'Lista de turnos'
            });
        } catch (error) {
            console.error('Error al listar turnos:', error);
            res.status(500).render('error', {
                message: 'Error al listar turnos'
            });
        }
    }

    async mostrarTurnoNuevo(req, res) {
        try {
            const pacientes = await pacienteModel.list();
            res.render('turnos/new', { 
                title: 'Registrar nuevo turno',
                pacientes
            });
        } catch (error) {
            console.error('Error al cargar formulario', error);
            res.status(500).render('error', {
                message: 'Error al cargar formulario'
            });
        }
    }

    async crearTurno(req, res) {
        const {
            fecha,
            pacienteId,
            motivo,
            estado
        } = req.body;
        const numericoPacienteId = parseInt(pacienteId, 10);

        if (isNaN(numericoPacienteId) || !fecha || !motivo) {
            return res.status(400).render('error', {
                message: 'Faltan datos para crear el turno.'
            });
        }

        const nuevoTurno = new Turno(null, numericoPacienteId, fecha, motivo, estado);

        try {
            await turnoModel.create(nuevoTurno);
            res.redirect('/turnos');
        } catch (error) {
            console.error('Error al crear el turno:', error);
            res.status(500).render('error', {
                message: 'Error al crear el turno'
            });
        }
    }

    async borrarTurno(req, res) {
        const idTurno = req.params.idTurno;
        const numericoIdTurno = parseInt(idTurno, 10);

        if (isNaN(numericoIdTurno)) {
            return res.status(400).render('error', {
                message: 'ID de turno inválido'
            });
        }

        try {
            await turnoModel.delete(numericoIdTurno);
            res.redirect('/turnos?mensaje=Turno borrado exitosamente');
        } catch (error) {
            console.error('Error al borrar turno:', error);
            let codigoError = 500;

            if (error.message.includes('Turno no encontrado')) {
                codigoError = 404;
            } else if (error.message.includes('Turno ya borrado')) {
                codigoError = 400;
            }

            res.status(codigoError).render('error', {
                message: error.message
            });
        }
    }
}

module.exports = new TurnosWebController();
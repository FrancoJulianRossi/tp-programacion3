const pacientesModel = require('./../../models/mock/pacientes.models.js');
const Paciente = require('./../../models/mock/entities/paciente.entity.js');

class PacientesWebController {
    async listarPacientes(req, res) {
        try {
            const pacientes = await pacientesModel.list();
            res.render('pacientes/listarPacientes', {
                title: 'Lista de pacientes',
                pacientes
            });
        } catch (error) {
            console.error('Error al listar pacientes:', error);
            res.status(500).render('error', {
                message: 'Error al listar pacientes'
            });
        }
    }

    async mostrarFormularioNuevo(req, res) {
        try {
            res.render('pacientes/crearPaciente', {
                title: 'Registrar nuevo paciente'
            });
        } catch (error) {
            console.error('Error al mostrar formulario:', error);
            res.status(500).render('error', {
                message: 'Error al mostrar formulario de paciente'
            });
        }
    }

    async crearPaciente(req, res) {
        const { dni, nombre, apellido, email } = req.body;

        if (!dni || !nombre || !apellido || !email) {
            return res.status(400).render('error', {
                message: 'Faltan datos para crear el paciente.'
            });
        }

        try {
            const nuevoPaciente = new Paciente(dni, nombre, apellido, email);
            await pacientesModel.create(nuevoPaciente);
            res.redirect('/pacientes');
        } catch (error) {
            console.error('Error al crear paciente:', error);
            res.status(500).render('error', {
                message: 'Error al crear paciente'
            });
        }
    }

    async eliminarPaciente(req, res) {
        const id = req.params.idPaciente;

        try {
            await pacientesModel.delete(id);
            res.redirect('/pacientes?mensaje=Paciente eliminado');
        } catch (error) {
            console.error('Error al eliminar paciente:', error);
            res.status(500).render('error', {
                message: 'Error al eliminar paciente'
            });
        }
    }

    async mostrarFormularioEditar(req, res) {
        const id = req.params.id;

        try {
            const paciente = await pacientesModel.getById(id);
            if (!paciente) {
                return res.status(404).render('error', {
                    message: 'Paciente no encontrado'
                });
            }

            res.render('pacientes/edit', {
                title: 'Editar paciente',
                paciente
            });
        } catch (error) {
            console.error('Error al cargar paciente:', error);
            res.status(500).render('error', {
                message: 'Error al cargar paciente para editar'
            });
        }
    }

async actualizarPaciente(req, res) {
    const id = req.params.idPaciente;
    const idNum = parseInt(id, 10);
    if (isNaN(idNum)) {
        return res.status(400).render('error', { message: 'ID inválido' });
    }

    const { dni, nombre, apellido, email } = req.body;

    try {
        const pacienteActual = await pacientesModel.getById(idNum);
        if (!pacienteActual) {
            return res.status(404).render('error', { message: 'Paciente no encontrado' });
        }
        const pacienteActualizado = new Paciente(
            dni,
            nombre,
            apellido,
            email,
            pacienteActual.password,
            idNum
        );
        await pacientesModel.update(idNum, pacienteActualizado);
        res.redirect('/pacientes');
    } catch (error) {
        console.error('Error al actualizar paciente:', error);
        res.status(500).render('error', {
            message: 'Error al actualizar paciente'
        });
    }
}
    async mostrarFormularioActualizar(req, res) {
        const id = parseInt(req.params.idPaciente);
        try {
            const paciente = await pacientesModel.getPacienteById(id);
            res.render('pacientes/editarPaciente', {
                title: 'Editar paciente',
                paciente
            });
        } catch (error) {
            console.error('Error al cargar el formulario de edición:', error);
            res.status(500).render('error', { message: 'Error al cargar el formulario de edición' });
        }
    }
}

module.exports = new PacientesWebController();
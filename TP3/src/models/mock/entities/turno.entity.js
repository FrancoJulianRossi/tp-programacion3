const Identificador = require("./identificador.entity");
class Turno extends Identificador{
    
    constructor(id=0,idPaciente,fecha,estado){
        super(id);
        this.idPaciente = idPaciente;
        this.fecha= fecha
        this.estado = estado;
    }
}
module.exports = Turno; 
const Identificador = require("./identificador.entity");
class Turno extends Identificador{
    
    constructor(id=0,idPaciente, fecha){
       super(id);
       this.idPaciente = idPaciente;
       this.fecha= fecha
       
    }
}
module.exports = Turno; 
const  express = require('express');
const  dotenv = require('dotenv');
const path = require('path');

const rutaPacientes = require('./routes/pacientes.route.js')
const turnosRutas = require('./routes/turnos.route.js');
const home = require('./routes/home.routes.js');
const rutaTurnosweb = require('./routes/web/turnos.route.js');
const rutaPacientesWeb = require('./routes/web/pacientes.route.js');
const morgan = require('morgan');

dotenv.config()

class Server {
  constructor (template=process.env.TEMPLATE || 'pug') {
    this.app = express()
    this.port = process.env.PORT || 3001
    this.middleware()
    //this.cors()
    this.engine(template)
    this.rutas()
 
    
  }

/*   cors () {
    this.app.use(cors())
  } */

  engine (template) {
     try{
       require.resolve(template);
        
       this.app.set('view engine', template)
       this.app.set('views', './src/views/'+template)
     }catch (error) {
        console.log('Error al configurar el motor de plantillas:',template)
        
      }

  }
  middleware () {
    this.app.use(express.static(path.join(__dirname, '..', 'public')));
    this.app.use(express.json())
    this.app.use(morgan('dev'))
    this.app.use(express.urlencoded({ extended: true }));
  }

  rutas () {
    this.app.use('/api/v1/pacientes', rutaPacientes)
    this.app.use('/',home)
    this.app.use('/api/v1/turnos', turnosRutas);
    this.app.use('/web/turnos', rutaTurnosweb);
    this.app.use('/web/pacientes', rutaPacientesWeb);
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(
        `Server running on port ${this.port}, host: ${process.env.HOST}:${this.port}`
      )
    })
  }
}

module.exports = Server
const personas = [{
        id: 1,
        nombre: 'Juan',
        apellido: 'Pérez',
        edad: 30,
        email: 'juan@hotmail.com'
    },
    {
        id: 2,
        nombre: 'Ana',
        apellido: 'Gómez',
        edad: 25,
        email: 'ana@hotmail.com'
    },
    {
        id: 3,
        nombre: 'Luis',
        apellido: 'Martínez',
        edad: 35,
        email: 'luis@hotmail.com'
    },
    {
        id: 4,
        nombre: 'Carla',
        apellido: 'Fernández',
        edad: 28,
        email: 'carla@hotmail.com'
    },
    {
        id: 5,
        nombre: 'Pedro',
        apellido: 'López',
        edad: 40,
        email: 'pedro@hotmail.com'
    }
];

function getAllPersonas() {
    return personas;
}

module.exports = {
    getAllPersonas
};
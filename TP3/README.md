# TP3 Sistema de turnos medicos

## Descripción
 Aplicación web para gestión de pacientes y turnos, desarrollada con Node.js y Express.

---

## 🚀 Instalación del Proyecto

1. Cloná este repositorio:

         git clone https://github.com/FrancoJulianRossi/tp-programacion3/tree/main/TP3

2. Entrá al directorio del proyecto:

       cd TP3

3. Instalá las dependencias:

       npm install

4. Ejecutá el servidor:

       npm run dev 

5. Accedé a la aplicación en:

       http://localhost:3000

## 📌 Endpoints Principales
GET /pacientes → Listar pacientes

GET /pacientes/crearPaciente → Formulario para crear paciente

POST /pacientes/nuevo → Crear nuevo paciente

GET /pacientes/actualizar/:idPaciente → Formulario para editar paciente

POST /pacientes/actualizar/:idPaciente → Actualizar paciente

POST /pacientes/:idPaciente/eliminar → Eliminar paciente


----------------------------------------------------------------------

GET /turnos → Listar turnos

GET /turnos/nuevo → Muestra los turnos nuevos

POST /turnos/nuevo → crea un turno nuevo

POST /turnos/:idTurno/borrar → libera un turno (No se puede borrar unturno disponible)


⚠️ Asegurate de tener el servidor corriendo para que los endpoints funcionen.

## 👥 Integrantes del Grupo
Franco Julian Rossi

Santiago Recari

Manuel Galdames


                                           Backend API REST - Auth & Users

API REST desarrollada con Node.js y Express que implementa autenticación con JWT, manejo de usuarios y control de roles (USER / ADMIN).
 Tecnologías utilizadas
- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt
                                              Funcionalidades

- Registro de usuarios
- Login con JWT
- Encriptación de contraseñas
- Rutas protegidas
- Middleware de autenticación
- Control de roles (ADMIN / USER)
- CRUD de usuarios
- Validación de permisos

                                        Estructura del proyecto
src/
Controllers/
services/
 models/
 routes/
 middlewares/
 config/
 utils/
 Instalación

1. Clonar el repositorio
git clone https://github.com/matiasbeni/backend-apiRest.git
2.Instalar dependencias
npm install
3.Crear archivo .env
PORT=3000
MONGO_URI=tu_mongo_uri
JWT_SECRET=tu_secret
4.Ejecutar el proyecto
  npm run dev
                                            Endpoints principales
1.Auth
POST /api/auth/login
2.Usuarios
POST /api/register → crear usuario
PUT /api/user/:id → actualizar usuario
DELETE /api/user/:id → eliminar usuario (ADMIN)
GET /api/admin → ruta protegida (ADMIN)
                                                  Autenticación

Las rutas protegidas requieren token JWT:

Authorization: Bearer token
                                                      Testing

Se puede probar con Postman o Thunder Client.


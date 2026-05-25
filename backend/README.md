# Backend Node.js + TypeScript + Brevo

## Que hace esta carpeta

Este backend recibe los registros del formulario, valida los datos y los envia por correo.

## Estructura

- `src/server.ts`: levanta el servidor
- `src/app.ts`: configura Express, CORS, JSON y rutas
- `src/config/env.ts`: carga y valida variables de entorno
- `src/modules/registrations/registration.schema.ts`: valida el body del registro con Zod
- `src/modules/registrations/registration.service.ts`: envia el correo por la API de Brevo
- `src/modules/registrations/registration.controller.ts`: maneja request/response
- `src/modules/registrations/registration.routes.ts`: define `POST /api/registrations`

## Flujo completo

1. El frontend hace `POST /api/registrations`
2. Express recibe el JSON
3. Zod valida nombre, apellido, telefono, correo y aceptacion de politica
4. Si todo esta bien, el backend envia un correo a `ed.jimenez0012@gmail.com`
5. Devuelve respuesta `201` si se guardo correctamente

## Paso 1: crear el archivo `.env`

Dentro de `backend/`, crea un archivo `.env` basado en `.env.example`

```env
PORT=4000
FRONTEND_URL=http://localhost:5173
BREVO_API_KEY=TU_BREVO_API_KEY
BREVO_SENDER_EMAIL=tu-correo-verificado@gmail.com
BREVO_SENDER_NAME=Panama Viajero
MAIL_TO=ed.jimenez0012@gmail.com
```

Necesitas:

- una cuenta en Brevo
- un `BREVO_API_KEY`
- un correo remitente verificado en Brevo para `BREVO_SENDER_EMAIL`

## Paso 2: instalar dependencias

Desde `backend/`:

```bash
yarn
```

## Paso 3: levantar el backend

```bash
yarn dev
```

Debes ver algo como:

```bash
Backend running on http://localhost:4000
```

## Endpoint disponible

### `POST /api/registrations`

Body:

```json
{
  "firstName": "Juan",
  "lastName": "Perez",
  "phone": "65094159",
  "email": "juan@email.com",
  "acceptedPrivacyPolicy": true
}
```

Respuesta exitosa:

```json
{
  "ok": true,
  "message": "Registro enviado correctamente"
}
```

## Prueba rapida con curl

```bash
curl -X POST http://localhost:4000/api/registrations ^
  -H "Content-Type: application/json" ^
  -d "{\"firstName\":\"Juan\",\"lastName\":\"Perez\",\"phone\":\"65094159\",\"email\":\"juan@email.com\",\"acceptedPrivacyPolicy\":true}"
```

## Que hace cada tecnologia

### Express

Es el servidor HTTP. Recibe peticiones del frontend.

### TypeScript

Te da tipos y reduce errores. Aqui asegura que el backend crezca de forma ordenada.

### Zod

Valida el body antes de enviar el correo.

### Brevo API

Permite enviar correos transaccionales desde el backend sin montar una base de datos.

### MAIL_TO

Es el correo fijo que recibe todos los preregistros. Ahora queda apuntando a `ed.jimenez0012@gmail.com`.

## Importante para produccion

- El backend se despliega separado del frontend
- `FRONTEND_URL` debe apuntar a tu dominio real
- `BREVO_API_KEY` solo vive en variables de entorno del servidor
- No la pongas nunca en React

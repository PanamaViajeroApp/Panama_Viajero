import type { Request, Response } from 'express';
import { ZodError } from 'zod';
import { sendRegistrationEmail } from './registration.service.js';
import { registrationSchema } from './registration.schema.js';

export async function registerUser(request: Request, response: Response) {
    try {
        const payload = registrationSchema.parse(request.body);
        await sendRegistrationEmail(payload);

        return response.status(201).json({
            ok: true,
            message: 'Registro enviado correctamente',
        });
    } catch (error) {
        if (error instanceof ZodError) {
            return response.status(400).json({
                ok: false,
                message: 'Datos invalidos',
                errors: error.flatten().fieldErrors,
            });
        }

        const message = error instanceof Error ? error.message : 'Error interno del servidor';

        return response.status(500).json({
            ok: false,
            message,
        });
    }
}

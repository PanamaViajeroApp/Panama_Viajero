import { env } from '../../config/env.js';
import type { RegistrationInput } from './registration.schema.js';

function buildMessage(data: RegistrationInput) {
    const submittedAt = new Date().toLocaleString('es-PA', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'America/Panama',
    });

    const fullName = `${data.firstName} ${data.lastName}`.trim();

    return {
        subject: `Nuevo preregistro - ${fullName}`,
        text: [
            'Se recibio un nuevo preregistro en Panama Viajero.',
            '',
            `Fecha: ${submittedAt}`,
            `Nombre: ${data.firstName}`,
            `Apellido: ${data.lastName}`,
            `Telefono: ${data.phone}`,
            `Correo: ${data.email.toLowerCase()}`,
            `Acepto politica: ${data.acceptedPrivacyPolicy ? 'Si' : 'No'}`,
        ].join('\n'),
        html: `
            <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.5;">
                <h2 style="margin-bottom: 16px;">Nuevo preregistro en Panama Viajero</h2>
                <p><strong>Fecha:</strong> ${submittedAt}</p>
                <p><strong>Nombre:</strong> ${data.firstName}</p>
                <p><strong>Apellido:</strong> ${data.lastName}</p>
                <p><strong>Telefono:</strong> ${data.phone}</p>
                <p><strong>Correo:</strong> ${data.email.toLowerCase()}</p>
                <p><strong>Acepto politica:</strong> ${data.acceptedPrivacyPolicy ? 'Si' : 'No'}</p>
            </div>
        `,
    };
}

export async function sendRegistrationEmail(data: RegistrationInput) {
    const message = buildMessage(data);
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'api-key': env.brevoApiKey,
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            sender: {
                name: env.brevoSenderName,
                email: env.brevoSenderEmail,
            },
            to: [{ email: env.mailTo }],
            replyTo: {
                email: data.email.toLowerCase(),
                name: `${data.firstName} ${data.lastName}`.trim(),
            },
            subject: message.subject,
            textContent: message.text,
            htmlContent: message.html,
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Brevo error: ${errorText || response.statusText}`);
    }
}

import 'dotenv/config';

function normalizeUrl(value: string) {
    return value.trim().replace(/\/+$/, '');
}

function getEnv(name: string) {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }

    return value;
}

export const env = {
    port: Number(process.env.PORT ?? 4000),
    frontendUrl: normalizeUrl(process.env.FRONTEND_URL ?? 'http://localhost:5173'),
    brevoApiKey: getEnv('BREVO_API_KEY'),
    brevoSenderEmail: getEnv('BREVO_SENDER_EMAIL'),
    brevoSenderName: process.env.BREVO_SENDER_NAME?.trim() || 'Panama Viajero',
    mailTo: process.env.MAIL_TO?.trim() || 'ed.jimenez0012@gmail.com',
};

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
    supabaseUrl: normalizeUrl(getEnv('SUPABASE_URL')),
    supabaseServiceRoleKey: getEnv('SUPABASE_SERVICE_ROLE_KEY'),
};

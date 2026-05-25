import { useState } from 'react';
import politicaDePrivacidadPdf from '../../assets/Politica de privacidad.pdf';

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL ?? '';

const initialForm = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    acceptedPrivacyPolicy: false,
};

function IconBase({ children, className = '' }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={className}
        >
            {children}
        </svg>
    );
}

function UserIcon({ className = '' }) {
    return (
        <IconBase className={className}>
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </IconBase>
    );
}

function PhoneIcon({ className = '' }) {
    return (
        <IconBase className={className}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.34 2.74a2 2 0 0 1-.57 1.72L7.1 9.9a16 16 0 0 0 7 7l1.72-1.78a2 2 0 0 1 1.72-.57l2.74.34A2 2 0 0 1 22 16.92Z" />
        </IconBase>
    );
}

function MailIcon({ className = '' }) {
    return (
        <IconBase className={className}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </IconBase>
    );
}

function Preregister() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState({ loading: false, error: '', success: '' });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        setForm((current) => ({
            ...current,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setStatus({ loading: true, error: '', success: '' });

        if (!APPS_SCRIPT_URL) {
            setStatus({
                loading: false,
                error: 'Falta configurar VITE_APPS_SCRIPT_URL',
                success: '',
            });
            return;
        }

        try {
            const payload = new URLSearchParams({
                firstName: form.firstName,
                lastName: form.lastName,
                phone: form.phone,
                email: form.email,
                acceptedPrivacyPolicy: String(form.acceptedPrivacyPolicy),
            });

            await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                body: payload.toString(),
            });

            setForm(initialForm);
            setStatus({
                loading: false,
                error: '',
                success: 'Registro enviado correctamente.',
            });
        } catch (error) {
            setStatus({
                loading: false,
                error: error instanceof Error ? error.message : 'Ocurrio un error inesperado',
                success: '',
            });
        }
    }

    return (
        <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-brand-blue/15 bg-brand-white p-8 shadow-[0_18px_45px_rgba(77,76,76,0.15)]">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col gap-2 border-b border-brand-soft pb-4 md:flex-row md:items-baseline md:justify-end">
                    <span className="font-body text-xl text-brand-charcoal/90">Registrate y participa por </span>
                    <span className="font-main text-3xl font-bold text-brand-red">UNA NOCHE GRATIS</span>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-brand-blue" />
                        <input
                            type="text"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            placeholder="Juan"
                            required
                            className="font-body w-full rounded-lg border-2 border-brand-soft p-3 pl-10 text-brand-charcoal outline-brand-blue transition placeholder:text-brand-charcoal/75 focus:border-brand-blue hover:border-brand-blue/90"
                        />
                    </div>

                    <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-brand-blue" />
                        <input
                            type="text"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            placeholder="Perez"
                            required
                            className="font-body w-full rounded-lg border-2 border-brand-soft p-3 pl-10 text-brand-charcoal outline-brand-blue transition placeholder:text-brand-charcoal/75 focus:border-brand-blue hover:border-brand-blue/90"
                        />
                    </div>

                    <div className="relative">
                        <PhoneIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-brand-blue" />
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="65094159"
                            required
                            className="font-body w-full rounded-lg border-2 border-brand-soft p-3 pl-10 text-brand-charcoal outline-brand-blue transition placeholder:text-brand-charcoal/75 focus:border-brand-blue hover:border-brand-blue/90"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="relative flex-1">
                            <MailIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-brand-blue" />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="micorreo012@gmail.com"
                                required
                                className="font-body w-full rounded-lg border-2 border-brand-soft p-3 pl-10 text-brand-charcoal outline-brand-blue transition placeholder:text-brand-charcoal/75 focus:border-brand-blue hover:border-brand-blue/90"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status.loading}
                            className="font-secondary-bold cursor-pointer rounded-lg bg-brand-red px-8 py-3 text-brand-white shadow-[0_12px_25px_rgba(205,46,76,0.25)] transition-colors hover:bg-brand-blue disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {status.loading ? 'Registrando...' : 'Registrarme'}
                        </button>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-brand-charcoal/90">
                        <input
                            type="checkbox"
                            id="terms"
                            name="acceptedPrivacyPolicy"
                            checked={form.acceptedPrivacyPolicy}
                            onChange={handleChange}
                            required
                            className="h-4 w-4 cursor-pointer accent-brand-blue"
                        />
                        <label htmlFor="terms" className="font-body">
                            He leido y acepto la{' '}
                            <a
                                href={politicaDePrivacidadPdf}
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-pointer underline hover:text-brand-blue"
                            >
                                politica de privacidad
                            </a>
                        </label>
                    </div>

                    {status.error ? (
                        <p className="font-body text-sm text-brand-red">{status.error}</p>
                    ) : null}

                    {status.success ? (
                        <p className="font-body text-sm text-brand-blue">{status.success}</p>
                    ) : null}
                </div>
            </form>
        </div>
    );
}

export default Preregister;

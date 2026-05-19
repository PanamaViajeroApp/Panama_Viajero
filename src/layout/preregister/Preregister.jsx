import { Mail, Phone, User } from 'lucide-react';

function Preregister() {
    return (
        <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-brand-blue/15 bg-brand-white p-8 shadow-[0_18px_45px_rgba(77,76,76,0.15)]">
            <form action="" className="space-y-6">
                <div className="flex flex-col gap-2 border-b border-brand-soft pb-4 md:flex-row md:items-baseline md:justify-end">
                    <span className="font-body text-xl text-brand-charcoal/90">Regístrate y participa por </span>
                    <span className="font-main text-3xl font-bold text-brand-red">UNA NOCHE GRATIS</span>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="relative">
                        <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-blue" />
                        <input type="text" placeholder="Juan" className="font-body w-full rounded-lg border-2 border-brand-soft p-3 pl-10 text-brand-charcoal outline-brand-blue transition placeholder:text-brand-charcoal/75 focus:border-brand-blue hover:border-brand-blue/90" />
                    </div>

                    <div className="relative">
                        <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-blue" />
                        <input type="text" placeholder="Pérez" className="font-body w-full rounded-lg border-2 border-brand-soft p-3 pl-10 text-brand-charcoal outline-brand-blue transition placeholder:text-brand-charcoal/75 focus:border-brand-blue hover:border-brand-blue/90" />
                    </div>

                    <div className="relative">
                        <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-blue" />
                        <input type="text" placeholder="65094159" className="font-body w-full rounded-lg border-2 border-brand-soft p-3 pl-10 text-brand-charcoal outline-brand-blue transition placeholder:text-brand-charcoal/75 focus:border-brand-blue hover:border-brand-blue/90" />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="relative flex-1">
                            <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-blue" />
                            <input type="email" placeholder="micorreo012@gmail.com" className="font-body w-full rounded-lg border-2 border-brand-soft p-3 pl-10 text-brand-charcoal outline-brand-blue transition placeholder:text-brand-charcoal/75 focus:border-brand-blue hover:border-brand-blue/90" />
                        </div>

                        <button className="font-secondary-bold cursor-pointer rounded-lg bg-brand-red px-8 py-3 text-brand-white shadow-[0_12px_25px_rgba(205,46,76,0.25)] transition-colors hover:bg-brand-blue">
                            Registrarme
                        </button>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-brand-charcoal/90">
                        <input type="checkbox" id="terms" className="h-4 w-4 cursor-pointer accent-brand-blue" />
                        <label htmlFor="terms" className="font-body cursor-pointer hover:underline">He leido y acepto los terminos y condiciones</label>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Preregister;

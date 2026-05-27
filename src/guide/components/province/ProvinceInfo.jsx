import AnimateProvince from '../animatecard/animateprovince.tsx';

function ProvinceInfo({ provinceData }) {
    return (
        <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:justify-between">
            <div className="w-full md:w-100">
                <AnimateProvince provinceData={provinceData} />
            </div>

            <div className="flex w-full flex-col justify-center md:w-1/2">
                <h1 className="font-main text-3xl md:text-4xl font-bold text-brand-blue">Reseña histórica</h1>
                <p className="font-body mt-4 leading-7 text-brand-charcoal/80 text-lg">{provinceData.resena}</p>
            </div>
        </section>
    );
}

export default ProvinceInfo;

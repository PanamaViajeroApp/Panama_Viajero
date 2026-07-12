function normalizeActivity(activity = '') {
    return activity
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
}

function SelectedActivitiesBar({
    selectedActivities = [],
    onRemoveActivity = () => {},
    onClearAll = () => {},
}) {
    const activities = Array.isArray(selectedActivities)
        ? selectedActivities.filter(Boolean)
        : selectedActivities
            ? [selectedActivities]
            : [];

    return (
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-3 px-4">
            <span className="inline-flex items-center rounded-full bg-brand-white px-4 py-2 text-sm font-bold uppercase 
            tracking-[0.28em] text-brand-red shadow-[0_10px_24px_rgba(73,86,162,0.22)] md:text-base">
                Filtro
            </span>

            {activities.length > 0 ? (
                <>
                    {activities.map((activity) => {
                        const key = normalizeActivity(activity);

                        return (
                            <button
                                key={key}
                                type="button"
                                onClick={() => onRemoveActivity(activity)}
                                className="inline-flex items-center gap-2 rounded-full border border-brand-blue bg-brand-blue px-4 py-2 text-sm font-semibold text-brand-white shadow-sm transition hover:bg-brand-blue/90"
                            >
                                <span className="max-w-[14rem] truncate">{activity}</span>
                                <span aria-hidden="true" className="text-lg leading-none cursor-pointer ">
                                    x
                                </span>
                            </button>
                        );
                    })}

                    <button
                        type="button"
                        onClick={onClearAll}
                        className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-white px-4 py-2 
                        text-sm font-semibold text-brand-charcoal shadow-sm transition hover:bg-brand-red hover:text-white"
                    >
                        Limpiar todo
                    </button>
                </>
            ) : (
                <span className="inline-flex items-center rounded-full border border-brand-blue bg-brand-white px-4 py-2 text-sm font-semibold text-black shadow-sm md:text-base">
                    Selecciona una o mas actividades
                </span>
            )}
        </div>
    );
}

export default SelectedActivitiesBar;

function normalizeActivity(activity = '') {
    return activity
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
}

function normalizeActivitySelection(selection = []) {
    const items = Array.isArray(selection) ? selection : selection ? [selection] : [];
    return [...new Set(items.filter(Boolean))];
}

function ActivityFilter({ selectedActivities = [], onActivitySelect = () => {} }) {
    const activities = normalizeActivitySelection(selectedActivities);

    const removeActivity = (activityToRemove) => {
        const targetKey = normalizeActivity(activityToRemove);
        const nextSelection = activities.filter((activity) => normalizeActivity(activity) !== targetKey);
        onActivitySelect(nextSelection);
    };

    return (
        <div className="mt-4 flex flex-wrap items-center gap-3 px-4">
            <span className="rounded-full border border-brand-blue/20 bg-brand-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-charcoal">
                Filtro
            </span>

            {activities.length > 0 ? (
                <>
                    {activities.map((activity) => (
                        <button
                            key={activity}
                            type="button"
                            onClick={() => removeActivity(activity)}
                            className="inline-flex items-center gap-2 rounded-full border border-brand-blue bg-brand-blue px-4 py-2 text-sm font-semibold text-brand-white shadow-sm transition hover:bg-brand-blue/90"
                        >
                            <span className="max-w-[14rem] truncate">{activity}</span>
                            <span aria-hidden="true" className="text-xs leading-none">
                                x
                            </span>
                        </button>
                    ))}

                    <button
                        type="button"
                        onClick={() => onActivitySelect([])}
                        className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-white px-4 py-2 text-sm font-semibold text-brand-charcoal shadow-sm transition hover:bg-brand-blue/10"
                    >
                        Limpiar todo
                    </button>
                </>
            ) : (
                <span className="inline-flex items-center rounded-full border border-brand-blue bg-brand-blue px-4 py-2 text-sm font-semibold text-brand-white shadow-sm">
                    Selecciona una o mas actividades
                </span>
            )}
        </div>
    );
}

export default ActivityFilter;

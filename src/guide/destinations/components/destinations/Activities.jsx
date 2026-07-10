import {
    LuBird,
    LuBinoculars,
    LuBike,
    LuCamera,
    LuCompass,
    LuFish,
    LuMapPinned,
    LuMountain,
    LuShipWheel,
    LuStore,
    LuTreePalm,
    LuTrees,
    LuUtensilsCrossed,
    LuSparkles,
    LuWaves,
} from 'react-icons/lu';
import { FaUmbrellaBeach } from 'react-icons/fa6';
import { IoBoat } from 'react-icons/io5';
import { useEffect, useRef } from 'react';

const activityRules = [
    { test: /(playa|playas)/, Icon: FaUmbrellaBeach },
    { test: /(nataci|nado|nadar|swim|surf|snorkel|buce|kayak|ballena|tortuga|mar|arrecife)/, Icon: LuWaves },
    { test: /(paseo(?:s)? en lancha|lancha|bote|boat)/, Icon: IoBoat },
    { test: /(pesca)/, Icon: LuFish },
    { test: /(Alquiler de bicicletas|patinaje|ruta|bicicleta)/, Icon: LuBike },
    { test: /(gastron|comida|restaur|sabores|culin)/, Icon: LuUtensilsCrossed },
    { test: /(senderismo|monta|trek)/, Icon: LuMountain },
    { test: /(bosque|naturaleza|parque)/, Icon: LuTrees },
    { test: /(estrella|estrellas)/, Icon: LuSparkles },
    { test: /(avistamiento|observaci).*(rana|ranas).*(roja|rojas)/, Icon: LuCamera },
    { test: /(avistamiento|observaci).*(delfin|delfines)/, Icon: LuBinoculars },
    { test: /(avistamiento|observaci).*(ballena|ballenas|tortuga|tortugas|fauna marina|marino|marina|medusa|medusas|pez|peces|coral|arrecife|manta|rayas?)/, Icon: LuWaves },
    { test: /(avistamiento|observaci|aves|pajar)/, Icon: LuBird },
    { test: /(canal|visitas|tour|recorrido|museo|hist|casco|ciudad|urbano|paseo)/, Icon: LuMapPinned },
    { test: /(isla|islote)/, Icon: LuTreePalm },
    { test: /(isla|islote|costa|costera|marino)/, Icon: LuShipWheel },
    { test: /(fotograf|paisaje|foto|mirador)/, Icon: LuCamera },
    { test: /.*/, Icon: LuCompass },
];

function getActivityIcon(activity) {
    const normalized = activity
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    return activityRules.find(({ test }) => test.test(normalized)) ?? activityRules[activityRules.length - 1];
}

function normalizeActivity(activity = '') {
    return activity
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
}

function normalizeActivitySelection(selection = []) {
    const items = Array.isArray(selection) ? selection : selection ? [selection] : [];
    return items.map((activity) => normalizeActivity(typeof activity === 'string' ? activity : '')).filter(Boolean);
}

function Activities({ provinceData, selectedActivities = [], onActivitySelect = () => {} }) {
    const contentRef = useRef(null);
    const firstGroupRef = useRef(null);
    const dragStateRef = useRef({
        pointerId: null,
        startX: 0,
        startY: 0,
        startOffset: 0,
        isDragging: false,
    });
    const offsetRef = useRef(0);
    const selectedActivityKeys = new Set(normalizeActivitySelection(selectedActivities));

    useEffect(() => {
        offsetRef.current = 0;
        if (contentRef.current) {
            contentRef.current.style.transform = 'translate3d(0px, 0, 0)';
        }
    }, [provinceData.actividades]);

    useEffect(() => {
        let rafId = 0;
        let lastTime = 0;
        const pxPerSecond = 42;

        const tick = (time) => {
            const groupWidth = firstGroupRef.current?.scrollWidth ?? 0;
            const content = contentRef.current;

            if (!content || !groupWidth) {
                lastTime = time;
                rafId = window.requestAnimationFrame(tick);
                return;
            }

            if (dragStateRef.current.isDragging) {
                lastTime = time;
                rafId = window.requestAnimationFrame(tick);
                return;
            }

            const delta = lastTime ? time - lastTime : 0;
            if (delta > 0) {
                offsetRef.current = (offsetRef.current + (pxPerSecond * delta) / 1000) % groupWidth;
                content.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
            }

            lastTime = time;
            rafId = window.requestAnimationFrame(tick);
        };

        rafId = window.requestAnimationFrame(tick);

        return () => {
            window.cancelAnimationFrame(rafId);
        };
    }, [provinceData.actividades]);

    const handlePointerDown = (event) => {
        const content = contentRef.current;
        if (!content) {
            return;
        }

        dragStateRef.current = {
            pointerId: event.pointerId,
            startX: event.clientX,
            startY: event.clientY,
            startOffset: offsetRef.current,
            isDragging: false,
        };

        content.setPointerCapture?.(event.pointerId);
    };

    const handlePointerMove = (event) => {
        if (dragStateRef.current.pointerId !== event.pointerId) {
            return;
        }

        const groupWidth = firstGroupRef.current?.scrollWidth ?? 0;
        const content = contentRef.current;
        if (!content || !groupWidth) {
            return;
        }

        const deltaX = event.clientX - dragStateRef.current.startX;
        const deltaY = event.clientY - dragStateRef.current.startY;
        const movedEnough = Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6;
        if (!dragStateRef.current.isDragging && !movedEnough) {
            return;
        }

        dragStateRef.current.isDragging = true;
        const nextOffset = dragStateRef.current.startOffset - deltaX;
        offsetRef.current = ((nextOffset % groupWidth) + groupWidth) % groupWidth;
        content.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    };

    const endDragging = (event) => {
        if (dragStateRef.current.pointerId === event.pointerId) {
            dragStateRef.current.pointerId = null;
        }

        dragStateRef.current.isDragging = false;

        const content = contentRef.current;
        if (content?.hasPointerCapture?.(event.pointerId)) {
            content.releasePointerCapture(event.pointerId);
        }
    };

    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col px-4 mt-[-65px]">
            <h1
                className="font-main text-3xl font-bold text-brand-white md:text-4xl mb-[-60px]"
                style={{ textShadow: '0 0 6px rgba(0, 0, 0, 0.9)' }}
            >
                Actividades
            </h1>
            <div
                className="overflow-hidden py-5 md:mt-2 [mask-image:linear-gradient(to_right,transparent,black_3%,black_90%,transparent)]"
            >
                <div
                    ref={contentRef}
                    className="flex w-max cursor-grab select-none active:cursor-grabbing will-change-transform py-20"
                    style={{ touchAction: 'pan-y' }}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={endDragging}
                    onPointerCancel={endDragging}
                >
                    {[0, 1].map((grupo) => (
                        <div
                            key={grupo}
                            className="flex shrink-0 gap-3 pr-3"
                            ref={grupo === 0 ? firstGroupRef : null}
                            aria-hidden={grupo === 1}
                        >
                            {provinceData.actividades.map((actividad) => {
                                const { Icon } = getActivityIcon(actividad);
                                const activityKey = normalizeActivity(actividad);
                                const isSelected = selectedActivityKeys.has(activityKey);

                                return (
                                    <button
                                        key={`${grupo}-${actividad}`}
                                        type="button"
                                        aria-pressed={isSelected}
                                        onPointerDown={(event) => event.stopPropagation()}
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            onActivitySelect(actividad);
                                        }}
                                        className={`font-secondary inline-flex cursor-pointer items-center gap-2 whitespace-nowrap 
                                            rounded-full px-4 py-2 text-sm shadow-sm transition 
                                            ${
                                            isSelected
                                                ? ' bg-brand-red text-brand-white'
                                                : 'bg-brand-white text-brand-charcoal hover:bg-brand-red hover:text-brand-white'
                                        }`}
                                    >
                                        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                                        {actividad}
                                    </button>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Activities;

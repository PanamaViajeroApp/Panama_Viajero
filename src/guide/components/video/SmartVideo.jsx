import { useEffect, useRef, useState } from 'react';

function deriveFallbackSrc(src) {
    if (typeof src !== 'string' || !src.endsWith('.av1.mp4')) {
        return null;
    }

    return src.replace(/\.av1\.mp4$/, '.h264.mp4');
}

function SmartVideo({
    src,
    webmSrc,
    fallbackSrc,
    className,
    poster,
    preload = 'none',
    eager = false,
    autoPlay = false,
    rootMargin = '200px',
    ...props
}) {
    const videoRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(eager);
    const [isVisible, setIsVisible] = useState(eager);
    const resolvedFallbackSrc = fallbackSrc || deriveFallbackSrc(src);

    useEffect(() => {
        if (eager || !videoRef.current) {
            return undefined;
        }

        const node = videoRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                const visible = entry.isIntersecting;
                if (visible) {
                    setShouldLoad(true);
                }
                setIsVisible(visible);
            },
            { rootMargin, threshold: 0.15 },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [eager, rootMargin]);

    useEffect(() => {
        const node = videoRef.current;
        if (!node || !shouldLoad) {
            return;
        }

        if (isVisible && autoPlay) {
            const playPromise = node.play();
            if (playPromise?.catch) {
                playPromise.catch(() => {});
            }
            return;
        }

        node.pause();
    }, [autoPlay, isVisible, shouldLoad]);

    return (
        <video
            ref={videoRef}
            className={className}
            poster={poster}
            preload={shouldLoad ? preload : 'none'}
            muted
            loop
            playsInline
            {...props}
        >
            {shouldLoad && (webmSrc || resolvedFallbackSrc) && (
                <>
                    {src && <source src={src} type='video/mp4; codecs="av01.0.05M.08"' />}
                    {webmSrc && <source src={webmSrc} type='video/webm; codecs="vp9"' />}
                    {resolvedFallbackSrc && <source src={resolvedFallbackSrc} type='video/mp4' />}
                </>
            )}
            {shouldLoad && !webmSrc && !resolvedFallbackSrc && src && (
                <source src={src} type='video/mp4' />
            )}
        </video>
    );
}

export default SmartVideo;

import { useEffect, useState } from 'react'

function BannerLayout() {
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

    useEffect(() => {
        const idleCallback = window.requestIdleCallback?.(() => setShouldLoadVideo(true), { timeout: 1200 })
        const timeoutId = window.setTimeout(() => setShouldLoadVideo(true), 900)

        return () => {
            if (idleCallback) {
                window.cancelIdleCallback?.(idleCallback)
            }
            window.clearTimeout(timeoutId)
        }
    }, [])

    return (
        <div className="relative aspect-[1920/1080] w-full overflow-hidden bg-black/20 md:aspect-[1920/775]">
            <img
                src="/videos/BannerPrincipal.avif"
                alt=""
                aria-hidden="true"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
            />
            {shouldLoadVideo && (
                <video
                    className="absolute inset-0 block h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/videos/BannerPrincipal.avif"
                >
                    <source src="/videos/BannerPrincipal.av1.mp4" type='video/mp4; codecs="av01.0.05M.08"' />
                    <source src="/videos/BannerPrincipal.h264.mp4" type="video/mp4" />
                </video>
            )}
        </div>
    )
}

export default BannerLayout

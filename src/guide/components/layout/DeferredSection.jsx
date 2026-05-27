import { useEffect, useRef, useState } from 'react'

function DeferredSection({
    children,
    fallback = null,
    rootMargin = '300px',
    threshold = 0.01,
    once = true,
}) {
    const containerRef = useRef(null)
    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
        const node = containerRef.current
        if (!node || shouldRender) {
            return undefined
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    return
                }

                setShouldRender(true)

                if (once) {
                    observer.disconnect()
                }
            },
            { rootMargin, threshold },
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [once, rootMargin, shouldRender, threshold])

    return (
        <div ref={containerRef}>
            {shouldRender ? children : fallback}
        </div>
    )
}

export default DeferredSection

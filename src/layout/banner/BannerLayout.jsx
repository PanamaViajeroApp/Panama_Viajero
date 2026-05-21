function BannerLayout() {
    return (
        <div className="relative aspect-[1920/1080] w-full overflow-hidden md:aspect-[1920/775] bg-black/20">
            <div className="absolute " />
            <video
                className="absolute inset-0 block h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                src='/videos/BannerPrincipal.mp4'
            ></video>
        </div>
    )
}

export default BannerLayout

import React, { useRef, useEffect } from 'react'

const Video = ({ className, syncTime }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current && syncTime !== undefined) {
            // Background video ke saath sync karne ke liye
            videoRef.current.currentTime = syncTime;
        }
    }, [syncTime]);

    return (
        <div className={`h-full w-full overflow-hidden ${className}`}>
            <video 
                ref={videoRef}
                className='h-full w-full object-cover'
                autoPlay 
                muted
                loop 
                playsInline // Mobile browsers ke liye zaroori hai
                preload="auto" // Forcing browser to load it early
                src="/bgF.mp4"
            ></video>
        </div>
    )
}

export default Video
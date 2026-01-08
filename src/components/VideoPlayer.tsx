import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  autoPlay?: boolean;
}

export function VideoPlayer({ src, poster, title, autoPlay = false }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Start false, autoPlay effect will convert logic
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isCCEnabled, setIsCCEnabled] = useState(false);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Format time helper
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [autoPlay, src]);

  // Handle controls visibility
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 0;
      setProgress((current / total) * 100);
      setCurrentTime(formatTime(current));
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(formatTime(videoRef.current.duration));
    }
  };

  const handleSeek = (value: number[]) => {
    if (videoRef.current) {
      const time = (value[0] / 100) * videoRef.current.duration;
      videoRef.current.currentTime = time;
      setProgress(value[0]);
    }
  };

  const skip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    if (videoRef.current) {
      const newVol = value[0];
      videoRef.current.volume = newVol;
      setVolume(newVol);
      if (newVol > 0 && isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative group w-full h-full bg-black flex flex-col justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      onDoubleClick={toggleFullscreen}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-contain"
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Skip Gesture Areas (Invisible Double Tap Zones) */}
      <div className="absolute inset-y-0 left-0 w-1/4 z-10" onDoubleClick={(e) => { e.stopPropagation(); skip(-10); }} />
      <div className="absolute inset-y-0 right-0 w-1/4 z-10" onDoubleClick={(e) => { e.stopPropagation(); skip(10); }} />

      {/* Overlay Play Button (Center) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-in zoom-in-50 duration-300">
            <span className="material-icons text-white text-5xl ml-1">play_arrow</span>
          </div>
        </div>
      )}

      {/* Controls Bar */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 transition-opacity duration-300 z-30",
        showControls ? "opacity-100" : "opacity-0"
      )}>
        {/* Progress Bar */}
        <div className="mb-4 group/slider relative">
           <Slider
            defaultValue={[0]}
            value={[progress]}
            max={100}
            step={0.1}
            onValueChange={handleSeek}
            className="cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={togglePlay} className="hover:text-primary transition-colors text-white">
              {isPlaying ? (
                <span className="material-icons">pause</span>
              ) : (
                <span className="material-icons">play_arrow</span>
              )}
            </button>
            
            <div className="flex items-center gap-2 group/volume relative">
              <button onClick={toggleMute} className="hover:text-primary transition-colors text-white">
                {isMuted || volume === 0 ? (
                  <span className="material-icons text-xl">volume_off</span>
                ) : (
                  <span className="material-icons text-xl">volume_up</span>
                )}
              </button>
              <div className="w-0 overflow-hidden group-hover/volume:w-24 transition-all duration-300 ease-out">
                 <Slider
                  defaultValue={[1]}
                  value={[isMuted ? 0 : volume]}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                  className="w-20 ml-2"
                />
              </div>
            </div>

            <span className="text-xs font-mono text-white/80">
              {currentTime} / {duration}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
             {/* Skip Buttons (Visible on Desktop) */}
            <button onClick={() => skip(-10)} className="hover:text-white text-white/70 transition-colors hidden sm:flex items-center gap-1 group/skip" title="Rewind 10s">
              <span className="material-icons text-[22px] group-hover/skip:-rotate-45 transition-transform">replay_10</span>
            </button>
            <button onClick={() => skip(10)} className="hover:text-white text-white/70 transition-colors hidden sm:flex items-center gap-1 group/skip" title="Skip 10s">
               <span className="material-icons text-[22px] group-hover/skip:rotate-45 transition-transform">forward_10</span>
            </button>

            <div className="w-px h-4 bg-white/20 mx-2 hidden sm:block" />

            <button 
              onClick={() => setIsCCEnabled(!isCCEnabled)}
              className={cn(
                "hover:text-white transition-colors flex items-center gap-1",
                isCCEnabled ? "text-primary" : "text-white/70"
              )}
              title="Closed Captions"
            >
              <span className="material-icons text-[22px]">closed_caption</span>
            </button>

            <button className="hover:text-white text-white/70 transition-colors hidden sm:block">
              <span className="material-icons text-[22px]">settings</span>
            </button>

            <button onClick={toggleFullscreen} className="hover:text-white text-white/70 transition-colors">
              {isFullscreen ? (
                <span className="material-icons text-[22px]">fullscreen_exit</span>
              ) : (
                <span className="material-icons text-[22px]">fullscreen</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


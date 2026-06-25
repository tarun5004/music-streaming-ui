import {
  ListMusic,
  Maximize,
  Pause,
  Play,
  PictureInPicture2,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from 'lucide-react'
import { useSelector } from 'react-redux'
import {useRef, useState } from 'react'
import { useNavigate } from 'react-router'


// 
const iconButtonClass =
  'grid h-8 w-8 place-items-center rounded-full text-[#b3b3b3] transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white'

const IconButton = ({ label, children, className = '' }) => {
  return (
    <button
      type="button"
      aria-label={label}
      className={`${iconButtonClass} ${className}`}
    >
      {children}
    </button>
  )
}

const ProgressBar = ({ value = 0, className = '' }) => {
  return (
    <div className={`h-1 rounded-full bg-[#4d4d4d] ${className}`}>
      <div
        className="h-full rounded-full bg-[#b3b3b3]"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

const Player = () => {
  const currentSong = useSelector((state)=> state.player.currentSong)
  const isPlaying = useSelector((state) => state.player.isPlaying)
  const navigate = useNavigate()

  const audioRef = useRef(null) // Create a ref for the audio element
  const [currentTime, setCurrentTime] = useState(0)  // State to track the current time of the audio
  const [duration, setDuration] = useState(0)       // State to track the duration of the audio

  const progress = duration ? (currentTime / duration) * 100 : 0 // Calculate the progress percentage

  const handleOpenSongPage = () => {
    if (!currentSong) return
    navigate(`/dashboard/song/${currentSong.id}`)
  }


  return (
    <footer className="grid h-20 grid-cols-[1fr_auto_1fr] items-center border-t border-[#1f1f1f] bg-black px-4 text-white">
      <button
        type="button"
        onClick={handleOpenSongPage}
        disabled={!currentSong}
        className="hidden min-w-0 items-center gap-3 text-left md:flex disabled:cursor-default"
      >
  {currentSong ? (
    <>
      <img
        src={currentSong.thumbnail}
        alt={currentSong.title}
        className="h-12 w-12 rounded object-cover"
      />

      <div className="min-w-0">
        <p className="truncate text-sm font-bold">
          {currentSong.title}
        </p>

        <p className="truncate text-xs text-[#b3b3b3]">
          {currentSong.artist}
        </p>
      </div>
    </>
  ) : (
    <p className="text-sm text-[#b3b3b3]">No song selected</p>
  )}
</button>

      <div className="col-span-3 flex min-w-0 flex-col items-center gap-3 md:col-span-1">
        <div className="flex items-center gap-3 sm:gap-5">
          <IconButton label="Shuffle">
            <Shuffle size={17} />
          </IconButton>

          <IconButton label="Previous">
            <SkipBack size={20} fill="currentColor" />
          </IconButton>
          {/* 
          button pause and play 
          */}
          <button
            type="button"
            aria-label={isPlaying ? 'Pause' : 'Play'}
            className="grid h-9 w-9 place-items-center rounded-full bg-[#b3b3b3] text-black transition hover:scale-105 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            {isPlaying ? (
              <Pause size={18} fill="currentColor" />
            ) : (
              <Play size={18} fill="currentColor" />
            )}
          </button>

          <IconButton label="Next">
            <SkipForward size={20} fill="currentColor" />
          </IconButton>

          <IconButton label="Repeat">
            <Repeat size={17} />
          </IconButton>
        </div>

        <ProgressBar value={progress} className="w-[min(50vw,620px)] min-w-[180px]" />
      </div>

      <div className="hidden items-center justify-end gap-2 md:flex">
        <IconButton label="Queue">
          <ListMusic size={18} />
        </IconButton>

        <IconButton label="Now playing view">
          <PictureInPicture2 size={18} />
        </IconButton>

        <Volume2 size={18} className="text-[#b3b3b3]" />
        <ProgressBar value={progress} className="w-24 lg:w-32" />

        <IconButton label="Full screen">
          <Maximize size={18} />
        </IconButton>
      </div>
      {/*
      Audio element
      Agar currentSong ke andar url hai
      to audio element banao
      aur us url ko autoPlay karo */}
      {currentSong?.url && (  
  <audio
    ref={audioRef}
    src={currentSong.url}    // Set the audio source to the current song's URL
    autoPlay                  // Automatically play the audio when the source changes
    onTimeUpdate={(event) => {    // Update the current time as the audio plays
      setCurrentTime(event.currentTarget.currentTime) // Update the current time state and the currenttarget.currentTime means the current time of the audio element
    }}
    onLoadedMetadata={(event) => {   // When the audio metadata is loaded, set the duration and reset current time
      setDuration(event.currentTarget.duration)
      setCurrentTime(0)
    }}
  />
)}
    </footer>
  )
}

export default Player

// iTunes previewUrl
//   -> songsApi me url
//   -> HomePage song
//   -> SongCard dispatch(song)
//   -> Redux currentSong
//   -> Player currentSong.url
//   -> audio play

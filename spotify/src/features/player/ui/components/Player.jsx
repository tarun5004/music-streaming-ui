import {
  ListMusic,
  Maximize,
  Pause,
  PictureInPicture2,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from 'lucide-react'

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

const ProgressBar = ({ className = '' }) => {
  return (
    <div className={`h-1 rounded-full bg-[#4d4d4d] ${className}`}>
      <div className="h-full w-1/2 rounded-full bg-[#b3b3b3]" />
    </div>
  )
}

const Player = () => {
  return (
    <footer className="grid h-20 grid-cols-[1fr_auto_1fr] items-center border-t border-[#1f1f1f] bg-black px-4 text-white">
      <div className="hidden min-w-0 md:block" />

      <div className="col-span-3 flex min-w-0 flex-col items-center gap-3 md:col-span-1">
        <div className="flex items-center gap-3 sm:gap-5">
          <IconButton label="Shuffle">
            <Shuffle size={17} />
          </IconButton>

          <IconButton label="Previous">
            <SkipBack size={20} fill="currentColor" />
          </IconButton>

          <button
            type="button"
            aria-label="Pause"
            className="grid h-9 w-9 place-items-center rounded-full bg-[#b3b3b3] text-black transition hover:scale-105 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <Pause size={18} fill="currentColor" />
          </button>

          <IconButton label="Next">
            <SkipForward size={20} fill="currentColor" />
          </IconButton>

          <IconButton label="Repeat">
            <Repeat size={17} />
          </IconButton>
        </div>

        <ProgressBar className="w-[min(50vw,620px)] min-w-[180px]" />
      </div>

      <div className="hidden items-center justify-end gap-2 md:flex">
        <IconButton label="Queue">
          <ListMusic size={18} />
        </IconButton>

        <IconButton label="Now playing view">
          <PictureInPicture2 size={18} />
        </IconButton>

        <Volume2 size={18} className="text-[#b3b3b3]" />
        <ProgressBar className="w-24 lg:w-32" />

        <IconButton label="Full screen">
          <Maximize size={18} />
        </IconButton>
      </div>
    </footer>
  )
}

export default Player

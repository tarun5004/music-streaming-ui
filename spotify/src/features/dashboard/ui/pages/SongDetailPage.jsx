import { Clock3, Download, MoreHorizontal, Play, Plus, Shuffle } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSong } from '../../../player/store/playerSlice'

const SongDetailPage = () => {
  const dispatch = useDispatch()
  const currentSong = useSelector((state) => state.player.currentSong)

  if (!currentSong) {
    return (
      <section className="flex min-h-full items-center justify-center text-center text-[#b3b3b3]">
        <div>
          <h1 className="text-2xl font-bold text-white">No song selected</h1>
          <p className="mt-2 text-sm">Double-click a song card to open its page.</p>
        </div>
      </section>
    )
  }

  const handlePlay = () => {
    dispatch(setCurrentSong(currentSong))
  }

  return (
    <section className="min-h-full overflow-hidden rounded-lg bg-[#121212] text-white">
      <div className="bg-gradient-to-b from-[#3fa8bb] via-[#126072] to-[#132326] p-7">
        <div className="flex flex-col gap-6 md:flex-row md:items-end">
          <img
            src={currentSong.thumbnail}
            alt={currentSong.title}
            className="h-52 w-52 rounded-md object-cover shadow-2xl"
          />

          <div className="min-w-0">
            <p className="text-sm font-bold">Single</p>
            <h1 className="mt-3 truncate text-5xl font-black tracking-normal lg:text-7xl">
              {currentSong.title}
            </h1>
            <p className="mt-4 text-base font-bold text-white/90">
              {currentSong.artist}
              <span className="font-medium text-white/70"> • {currentSong.year || 'Unknown year'}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#0b3038] to-[#121212] px-7 py-6">
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={handlePlay}
            aria-label={`Play ${currentSong.title}`}
            className="grid h-14 w-14 place-items-center rounded-full bg-[#1ed760] text-black transition hover:scale-105 hover:bg-[#20e568] focus:outline-none focus:ring-2 focus:ring-white"
          >
            <Play size={26} fill="currentColor" />
          </button>

          <button type="button" aria-label="Shuffle" className="text-[#b3b3b3] transition hover:text-white">
            <Shuffle size={30} />
          </button>
          <button type="button" aria-label="Add song" className="text-[#b3b3b3] transition hover:text-white">
            <Plus size={34} />
          </button>
          <button type="button" aria-label="Download" className="text-[#b3b3b3] transition hover:text-white">
            <Download size={30} />
          </button>
          <button type="button" aria-label="More options" className="text-[#b3b3b3] transition hover:text-white">
            <MoreHorizontal size={30} />
          </button>
        </div>

        <div className="mt-8 grid grid-cols-[32px_minmax(0,1fr)_120px_48px] border-b border-white/10 px-6 pb-3 text-sm font-medium text-[#b3b3b3]">
          <span>#</span>
          <span>Title</span>
          <span className="text-right">Plays</span>
          <Clock3 size={18} className="justify-self-end" />
        </div>

        <button
          type="button"
          onClick={handlePlay}
          className="grid w-full grid-cols-[32px_minmax(0,1fr)_120px_48px] items-center rounded-md px-6 py-3 text-left text-[#b3b3b3] transition hover:bg-white/10"
        >
          <span className="text-[#1ed760]">1</span>
          <span className="min-w-0">
            <span className="block truncate font-bold text-[#1ed760]">{currentSong.title}</span>
            <span className="block truncate text-sm">{currentSong.artist}</span>
          </span>
          <span className="text-right text-sm">Preview</span>
          <span className="justify-self-end text-sm">0:30</span>
        </button>
      </div>
    </section>
  )
}

export default SongDetailPage

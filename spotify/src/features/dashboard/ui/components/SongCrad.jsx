import { Play } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { setCurrentSong } from '../../../player/store/playerSlice'


const SongCrad = ({ song }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();   // Get the navigate function from react-router

  const handleSongPlay = (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the parent elements
    dispatch(setCurrentSong(song));  // Dispatch the action to set the current song in the Redux store
  }

  // Handle opening the song page
  const handleSongOpen = () => { 
    dispatch(setCurrentSong(song));
    navigate(`/dashboard/song/${song.id}`);
  }

  const { title, artist, album, thumbnail, year } = song
  const displayYear = year ? String(year).slice(0, 4) : 'Unknown year'

  return (
    <article
      onDoubleClick={handleSongOpen}
      className="group cursor-pointer rounded-lg bg-[#181818] p-3 text-white transition hover:bg-[#282828]"
    >
      <div className="relative aspect-square overflow-hidden rounded-md bg-[#282828]">
        <img
          src={thumbnail}
          alt={`${title} cover`}
          className="h-full w-full object-cover"
          loading="lazy"
        />

        <button onClick={handleSongPlay}
          type="button"
          aria-label={`Play ${title}`}
          className="absolute bottom-3 right-3 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-[#1ed760] text-black opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <Play size={20} fill="currentColor" />
        </button>
      </div>

      <div className="mt-3 min-w-0">
        <h3 className="truncate text-base font-bold">{title}</h3>
        <p className="mt-1 line-clamp-2 text-sm font-medium leading-5 text-[#b3b3b3]">
          {artist}
        </p>
        <p className="mt-2 truncate text-xs font-medium text-[#8a8a8a]">
          {album} - {displayYear}
        </p>
      </div>
    </article>
  )
}

export default SongCrad

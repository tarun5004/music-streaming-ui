import { useEffect, useState } from 'react'
import { searchSongs } from '../../api/songsApi'
import SongCrad from '../components/SongCrad'

const HomePage = () => {
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadSongs = async () => {
      try {
        setLoading(true)
        const songData = await searchSongs('arijit singh')
        setSongs(songData)
      } catch {
        setError('Failed to load songs. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    loadSongs()
  }, [])

  if (loading) return <p className="text-white">Loading songs...</p>
  if (error) return <p className="text-red-400">{error}</p>

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
      {songs.map((song, index) => (
        <SongCrad key={song.id} song={song} songs={songs} index={index} />
      ))}
    </div>
  )
}

export default HomePage





// {songs.map((song) => (
//   <SongCrad key={song.url} song={song} />
// ))}




// HomePage load hota hai
// -> useEffect chalta hai
// -> searchSongs API call karta hai
// -> API data ko clean shape me convert karta hai
// -> setSongs state update karta hai
// -> songs.map card render karta hai

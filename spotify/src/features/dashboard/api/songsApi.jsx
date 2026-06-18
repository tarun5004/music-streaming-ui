export const searchSongs = async (searchTerm = 'arijit singh') => {
  const query = encodeURIComponent(searchTerm)

  const response = await fetch(
    `https://itunes.apple.com/search?term=${query}&media=music&entity=song&limit=30`
  )

  const data = await response.json()

  return data.results.map((song) => ({
    id: song.trackId,
    title: song.trackName,
    artist: song.artistName,
    album: song.collectionName,
    year: song.releaseDate?.slice(0, 4),
    thumbnail: song.artworkUrl100?.replace('100x100bb', '600x600bb'),
    url: song.previewUrl,
  }))
}
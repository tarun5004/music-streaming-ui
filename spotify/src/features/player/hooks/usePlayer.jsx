import {useEffect, useRef, useState} from 'react'
import { useSelector } from 'react-redux'

export const usePlayer = () => {


    let audioRef = useRef(new Audio()) // Create a ref for the audio element

    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    const progress = duration ? (currentTime / duration) * 100 : 0

    let { currentSong, isPlaying, shuffle } = useSelector((state) => state.player) // Get the current song and playing state from the Redux store
    

    // useeffect to handle progress bar and duration of the audio element
    useEffect(() => {
        const audio = audioRef.current // Get the audio element from the ref

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime) // Update the current time state with the audio's current time
        }

        const handleLoadedMetadata = () => {
            setDuration(audio.duration) // Update the duration state with the audio's duration
        }

        audio.addEventListener('timeupdate', handleTimeUpdate)  // Add an event listener to update the current time as the audio plays
        audio.addEventListener('loadedmetadata', handleLoadedMetadata) // Add an event listener to set the duration when the audio metadata is loaded

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate) // Clean up the event listener when the component unmounts
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata) // Clean up the event listener when the component unmounts
        }
    }, [])


    // useEffect to handle the current song and play/pause state
    useEffect(() => {
        if (!currentSong?.url) return // If there's no current song or the audio element is not available, exit early

        const audio = audioRef.current // Get the audio element from the ref
        audio.src = currentSong.url // Set the audio source to the current song's URL
        audio.play().catch((error) => {
            console.error("Error playing audio:", error) // Log any errors that occur while trying to play the audio
        })
    }, [currentSong])


    // useEffect to handle the play/pause state of the audio element
    useEffect(() => {
        if (!audioRef.current) return // If the audio element is not available, exit early
        const audio = audioRef.current // Get the audio element from the ref

        if (isPlaying){
            audio.play().catch((error) => {
                console.error("Error playing audio:", error) // Log any errors that occur while trying to play the audio
            })
        } else {
            audio.pause() // Pause the audio if isPlaying is false
        }
    }, [isPlaying])


    return {
        currentSong,
        isPlaying,
        shuffle,
        currentTime,
        duration,
        progress,
  }
}

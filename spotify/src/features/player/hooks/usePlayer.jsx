import {useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { play, pause } from '../store/playerSlice'

export const usePlayer = () => {

    let dispatch = useDispatch() // Get the dispatch function from Redux
    let audioRef = useRef(new Audio()) // Create a ref for the audio element

    let { currentSong, isPlaying } = useSelector((state) => state.player) // Get the current song and playing state from the Redux store

    useEffect(() => {
        if (!currentSong?.url || !audioRef.current) return // If there's no current song or the audio element is not available, exit early

        audioRef.current.src = currentSong.url // Set the source of the audio element to the current song's URL
        audioRef.current.play() // Play the audio
    }, [currentSong])

    useEffect(() => {
        if (!audioRef.current) return // If the audio element is not available, exit early

        if (isPlaying) {
            audioRef.current.play() // Play the audio if isPlaying is true
        } else {
            audioRef.current.pause() // Pause the audio if isPlaying is false
        }
    }, [isPlaying])


let togglePlayAndPause = () => {
    if (isPlaying) {
        dispatch(pause()); // Pause the audio if isPlaying is true
    } else {
        dispatch(play()); // Play the audio if isPlaying is false
    }
};

return {
    togglePlayAndPause,
    }
};
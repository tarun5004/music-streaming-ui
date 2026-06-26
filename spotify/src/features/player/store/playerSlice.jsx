import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentSong: null,
    isPlaying: false,
    queue: [],
    currentIndex: -1,
    shuffle: false,
}

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setCurrentSong: (state, action) => {
            state.currentSong = action.payload
            state.isPlaying = true
        },
        setQueueAndPlay: (state, action) => {
            const { songs, index } = action.payload

            state.queue = songs
            state.currentIndex = index
            state.currentSong = songs[index]
            state.isPlaying = true
        },
        play: (state) => {
            state.isPlaying = true
        },
        pause: (state) => {
            state.isPlaying = false
        },
        playNext: (state) => {
            if (!state.queue.length) return

            let nextIndex

            if (state.shuffle) {
                nextIndex = Math.floor(Math.random() * state.queue.length)

                if (state.queue.length > 1) {
                    while (nextIndex === state.currentIndex) {
                        nextIndex = Math.floor(Math.random() * state.queue.length)
                    }
                }
            } else {
                nextIndex = state.currentIndex + 1

                if (nextIndex >= state.queue.length) {
                    nextIndex = 0
                }
            }

            state.currentIndex = nextIndex
            state.currentSong = state.queue[nextIndex]
            state.isPlaying = true
        },
        playPrevious: (state) => {
            if (!state.queue.length) return

            let previousIndex

            if (state.shuffle) {
                previousIndex = Math.floor(Math.random() * state.queue.length)

                if (state.queue.length > 1) {
                    while (previousIndex === state.currentIndex) {
                        previousIndex = Math.floor(Math.random() * state.queue.length)
                    }
                }
            } else {
                previousIndex = state.currentIndex - 1

                if (previousIndex < 0) {
                    previousIndex = state.queue.length - 1
                }
            }

            state.currentIndex = previousIndex
            state.currentSong = state.queue[previousIndex]
            state.isPlaying = true
        },
        toggleShuffle: (state) => {
            state.shuffle = !state.shuffle
        },
    },
})

export const { setCurrentSong, play, pause, setQueueAndPlay, playNext, playPrevious, toggleShuffle } = playerSlice.actions
export default playerSlice.reducer

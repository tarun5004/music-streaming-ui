import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentSong: null,
    isPlaying: false,
}

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setCurrentSong: (state, action) => {
            state.currentSong = action.payload
            state.isPlaying = true
        },
        play: (state) => {
            state.isPlaying = true
        },
        pause: (state) => {
            state.isPlaying = false
        },
    },
})

export const { setCurrentSong, play, pause } = playerSlice.actions
export default playerSlice.reducer
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
        playSong: (state) => {
            state.isPlaying = true
        },
        pauseSong: (state) => {
            state.isPlaying = false
        },
    },
})

export const { setCurrentSong, playSong, pauseSong } = playerSlice.actions
export default playerSlice.reducer
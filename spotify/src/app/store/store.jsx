import {configureStore} from "@reduxjs/toolkit";
import playerReducer from "../../features/player/store/playerSlice";

export const store = configureStore({
    reducer: {
        player: playerReducer,
    },
})
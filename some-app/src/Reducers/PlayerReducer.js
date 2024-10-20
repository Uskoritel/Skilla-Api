import { createSlice } from '@reduxjs/toolkit';

export const playerReducer = createSlice({
    name: 'player',
    initialState: {
      play: false,
    },
    reducers: {
      play: (state) => {
        state.play = true
      },
      pause: (state) => {
        state.play = false
      },
    },
})


export const { play, pause } = playerReducer.actions

export default playerReducer.reducer
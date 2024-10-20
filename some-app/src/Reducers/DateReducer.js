import { createSlice } from '@reduxjs/toolkit';

export const dateReducer = createSlice({
    name: 'datePicker',
    initialState: {
      date: new Date(),
    },
    reducers: {
      setRangeDate: (state, action) => {
        state.date = action.payload
      },
    },
})


export const { setRangeDate } = dateReducer.actions

export default dateReducer.reducer
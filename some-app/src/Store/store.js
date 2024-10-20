import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '../Reducers/PlayerReducer';
import { dateReducer } from '../Reducers/DateReducer';

export default configureStore({
  reducer: {
    player: playerReducer,
    datePicker : dateReducer,
  }
})
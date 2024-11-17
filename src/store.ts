import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './reducers/imageReducers'; 

const store = configureStore({
  reducer: imageReducer, 
});

export default store;
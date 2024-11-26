import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './images/imagesSlice'; 
import usersReducer from './users/userSlice';

export const store = configureStore({
  reducer: {
    image: imageReducer, 
    users: usersReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { addListener, createListenerMiddleware } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '.';

export const listenerMiddleware = createListenerMiddleware();
export const addActionListener = listenerMiddleware.startListening.withTypes<
  AppState,
  AppDispatch
>();
export const addAppListener = addListener.withTypes<AppState, AppDispatch>();
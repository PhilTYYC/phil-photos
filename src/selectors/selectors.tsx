import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../selectors';

export const loggedInUseSelector = (state: AppState) =>
  state.users;
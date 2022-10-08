import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import leafletMapReducer from '../features/leafletMap/leafletMapSlice';

export const store = configureStore({
  reducer: {
    leafletMap: leafletMapReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { configureStore } from '@reduxjs/toolkit';
import { playersApiSlice } from './services/playersApiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    // Add each API slice reducer to the store
    [playersApiSlice.reducerPath]: playersApiSlice.reducer,
    // [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playersApiSlice.middleware, ),
});

setupListeners(store.dispatch);

export default store;
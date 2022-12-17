import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from '../redux/filtersSlice';

import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './contactSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filters: filtersReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch);

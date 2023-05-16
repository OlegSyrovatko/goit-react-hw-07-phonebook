import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import { phonebookApi } from './phonebookSlice';
import { filtersReducer } from "./filtersSlice";
import { modalReducer } from "./modalSlice";


const customMiddleware = (store) => (next) => (action) => {
  return next(action);
};

export const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    modal: modalReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(phonebookApi.middleware, customMiddleware),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);

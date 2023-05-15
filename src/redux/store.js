import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import { phonebookApi } from './phonebookSlice';
// import { contactsReducer } from "./contactsSlice";
// import { filtersReducer } from "./filtersSlice";
import { modalReducer } from "./modalSlice";



export const store = configureStore({
  reducer: {
    
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    phonebookApi.middleware,
  ],
});

setupListeners(store.dispatch);



// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filtersReducer,
//     modal: modalReducer,
//   },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },

// });

// export const persistor = persistStore(store);



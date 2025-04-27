import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filters/filtersSlice";
import { contactReducer } from "./contacts/contactsSlice";
import { authReducer } from "./auth/authSlice";

const persistAuthConfig = {
  key: "token",
  version: 1,
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

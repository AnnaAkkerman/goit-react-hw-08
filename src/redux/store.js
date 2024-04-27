import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
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

// import { productDetailsReducer } from "./productDetails/productDetailsSlice";
import { authReducer } from "./auth/slice";

const authPeristConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "contacts"],
};

export const store = configureStore({
  reducer: {
    contactsData: contactsReducer,
    filtersData: filtersReducer,
    // mailbox: persistReducer(mailboxPeristConfig, mailboxReducer),
    // mailbox: mailboxReducer,
    // countDownTimer: timerReducer,
    // productDetails: productDetailsReducer,
    auth: persistReducer(authPeristConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

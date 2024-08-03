import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import globalsReducer from "./features/globals/globalsSlice";
import chatSlice from "./features/chat/chatSlice";

const store = configureStore({
  reducer: {
    global: globalsReducer,
    chat: chatSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;

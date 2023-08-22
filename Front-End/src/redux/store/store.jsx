import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { AuthApi } from "../services/AuthApi";
import AuthReducer from "../slice/authSlice";
import { PostApi } from "../services/PostApi";

export const store = configureStore({
  reducer: {
    userReducer: AuthReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [PostApi.reducerPath]: PostApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(AuthApi.middleware, PostApi.middleware),
  devTools: true,
});
setupListeners(store.dispatch);

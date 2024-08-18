import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { edgeApi } from "./services/edgeApi";
import { nodeApi } from "./services/nodeApi";
import { mindmapApi } from "./services/mindmap";
export const store = configureStore({
  reducer: {
    [edgeApi.reducerPath]: edgeApi.reducer,
    [nodeApi.reducerPath]: nodeApi.reducer,
    [mindmapApi.reducerPath]: mindmapApi.reducer,
  },
  devTools: true,

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      edgeApi.middleware,
      nodeApi.middleware,
      mindmapApi.middleware,
    ]);
  },
});
setupListeners(store.dispatch);

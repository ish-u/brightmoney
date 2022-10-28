import { configureStore } from "@reduxjs/toolkit";
import billReducer from "./features/bills/bilsSlice";
export const store = configureStore({
  reducer: {
    bills: billReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

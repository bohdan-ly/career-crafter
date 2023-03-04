import { configureStore } from "@reduxjs/toolkit";
import categories from "store/categories/slice";
import recipes from "store/recipes/slice";
import products from "store/products/slice";
import filter from "store/filter/slice";
import fridge from "store/fridge/slice";
import user from "store/user/slice";

export const store = configureStore({
  reducer: {
    categories,
    recipes,
    products,
    filter,
    fridge,
    user,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

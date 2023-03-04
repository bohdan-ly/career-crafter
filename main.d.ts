import { store } from "app/model";

type GUID = string;

type SelectItem = { id: string; title: string };

type DateRange = {
  startDate: Date;
  endDate: Date;
};

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<
  typeof import("./src/app/model/store").store.getState
>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof import("./src/app/model/store").store.dispatch;

enum ResponseStatus {
  SUCCESS = "success",
  ERROR = "error",
  FAIL = "fail",
}

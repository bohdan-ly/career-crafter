import { NavigateFunction } from "react-router-dom";

let navigateFunc: NavigateFunction | null = null;

export const setNavigate = (navigate: NavigateFunction): void =>
  void (navigateFunc = navigate);

export const navigateTo = (path: string): void =>
  void (navigateFunc && navigateFunc(path));

export const PATHS = {
  root: "/",
  main: {
    root: "/home",
  },
  categories: {
    root: "/categories",
    category: "/categories/:categoryId",
    project: "/categories/:categoryId/:projectId",
  },
  profile: {
    root: "/profile",
    user: "/profile/:userId",
  },
  explore: {
    root: "/explore",
  },
  error: {
    root: "/error",
    accessDenied: "/error/401",
    serverError: "/error/500",
  },
};

import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { PATHS } from "shared/navigation";

import WelcomePage from "pages/welcome";

const lazyLoad = (loadedModule: () => Promise<{ default: React.FC }>) =>
  React.lazy(() =>
    loadedModule().catch((err) => {
      if (err.message && /Loading chunk [\d]+ failed/.test(err.message)) {
        // return { default: ServerErrorPage };
        return { default: <div>500</div> };
      }
      return err;
    })
  );

const CategoriesPage = lazyLoad(() => import("./categories"));
const CategoryPage = lazyLoad(() => import("./category"));
const ProjectPage = lazyLoad(() => import("./project"));
const ProfilePage = lazyLoad(() => import("./profile"));
const ExplorePage = lazyLoad(() => import("./explore"));
// const WelcomePage = lazyLoad(() => import("./home"));

const routesMap = [
  {
    path: PATHS.root,
    element: <Navigate to={PATHS.main.root} />,
  },
  {
    path: PATHS.main.root,
    element: <WelcomePage />,
  },
  {
    path: PATHS.categories.root,
    element: <CategoriesPage />,
  },
  {
    path: PATHS.categories.category,
    element: <CategoryPage />,
  },
  {
    path: PATHS.categories.project,
    element: <ProjectPage />,
  },
  {
    path: PATHS.profile.root,
    element: <ProfilePage />,
  },
  {
    path: PATHS.profile.user,
    element: <ProfilePage />,
  },
  {
    path: PATHS.explore.root,
    element: <ExplorePage />,
  },
  {
    path: PATHS.error.accessDenied,
    // element: <AccessDeniedPage />,
    element: <div>401</div>,
  },
  {
    path: PATHS.error.serverError,
    // element: <ServerErrorPage />,
    element: <div>500</div>,
  },
];

export const Routes: React.FC = () => useRoutes(routesMap);

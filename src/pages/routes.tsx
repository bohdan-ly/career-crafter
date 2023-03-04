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
    path: PATHS.main.categories,
    element: <CategoriesPage />,
  },
  // {
  //   path: PATHS.main.fridge,
  //   element: <FridgePage />,
  // },
  // {
  //   path: PATHS.main.shop,
  //   element: <ShopPage />,
  // },
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

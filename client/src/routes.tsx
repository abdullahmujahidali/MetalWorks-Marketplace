import { Suspense, lazy } from "react";
import {
  Navigate,
  RelativeRoutingType,
  To,
  createBrowserRouter,
} from "react-router-dom";

import Landing from "./views/Landing/Landing";

// const Landing = lazy(() => import("views/Landing"));

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
  {
    path: `/`,
    element: (
      <Suspense fallback={<span />}>
        <Landing />
      </Suspense>
    ),
  },
]);

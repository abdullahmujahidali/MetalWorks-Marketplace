/* eslint-disable react-refresh/only-export-components */
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import LandingPage from "./views/Landing/Landing";
import SignupPage from "./views/auth/Signup";

export default createBrowserRouter([
  {
    path: `/`,
    element: (
      <Suspense fallback={<span />}>
        <LandingPage />
      </Suspense>
    ),
  },
  {
    path: `/register`,
    element: (
      <Suspense fallback={<span />}>
        <SignupPage />
      </Suspense>
    ),
  },
]);

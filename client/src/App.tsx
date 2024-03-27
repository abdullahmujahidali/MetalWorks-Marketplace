import { RouterProvider } from "react-router-dom";

import routes from "./routes";

export default function MyApp() {
  return <RouterProvider router={routes} />;
}

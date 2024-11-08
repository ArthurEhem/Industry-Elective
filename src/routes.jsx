import { createBrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";



const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage />
    ),
  },
]);

export { browserRouter };

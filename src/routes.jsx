import { createBrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";
import FlagQuiz from "./components/FlagQuiz";



const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage />
    ),
  },
  {
    path: "/game",
    element: (
        <FlagQuiz />
    ),
  },
]);

export { browserRouter };

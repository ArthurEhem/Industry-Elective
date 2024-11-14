import { createBrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";
import ResultPage from "./components/ResultPage";



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
        <Quiz />
    ),
  },
  {
    path: "/game/results",
    element: (
        <ResultPage />
    )
  },
]);

export { browserRouter };

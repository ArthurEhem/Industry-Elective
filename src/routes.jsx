import { createBrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";
import FlagQuiz from "./components/FlagQuiz";
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
        <FlagQuiz />
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

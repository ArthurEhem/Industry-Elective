import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";
import ResultPage from "./components/ResultPage";
import Layout from "./components/Layout";
import Options from "./components/Options";
import Library from "./components/Library";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />
      }
    ]
  },
  {
    path: "/game",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Quiz />
      }
    ]
  },
  {
    path: "/game/results",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <ResultPage />
      }
    ]
  },
  {
    path: "/options",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Options />
      }
    ]
  },
  {
    path: "/library",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Library />
      }
    ]
  },
]);

export { browserRouter };

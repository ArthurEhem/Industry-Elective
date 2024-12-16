import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Quiz from "./pages/Quiz";
import ResultPage from "./pages/ResultPage";
import Layout from "./components/Layout";
import Options from "./pages/Options";
import Library from "./pages/Library";
import ContinentGuessGame from "./pages/ContinentGuessGame";
import ProtectedGameRoute from "./components/ProtectedRoute";
import History from "./pages/History";
import About from "./pages/About";

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
        element: 
          <ProtectedGameRoute>
            <Quiz />
          </ProtectedGameRoute>
      }
    ]
  },
  {
    path: "/game/results",
    element: <Layout />,
    children: [
      {
        path: "",
        element: 

            <ResultPage />

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
  {
    path: "/ContinentGuessGame",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <ContinentGuessGame />
      }
    ]
  },
  {
    path: "/history",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <History />
      }
    ]
  },
  {
    path: "/about",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <About />
      }
    ]
  }
]);

export { browserRouter };

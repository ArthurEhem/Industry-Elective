import ReactDOM from "react-dom/client";

import "./index.css";

import { browserRouter } from "./routes";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={browserRouter} />
);

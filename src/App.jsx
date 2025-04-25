import Home from "./pages/Home"
import About from "./pages/About/About" 
import Accommodation from "./pages/Accommodation/Accommodation"
import Error404 from "./pages/Error404/Error404"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/general.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Home />
    ),
  },
  {
    path: "/a-propos",
    element: (
        <About />
    ),
  },
  {
    path: "/logement/:id",
    element: (
        <Accommodation />
    ),
  },
  {
    path: "*",
    element: (
        <Error404 />
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

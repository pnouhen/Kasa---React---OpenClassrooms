import "./styles/body.scss";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Error404 from "./components/pages/Error404.jsx";
import Accommodation from "./components/pages/Accommodation.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
// 404 quand id Logement n'existe pas
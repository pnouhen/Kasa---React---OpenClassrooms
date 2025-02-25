import "./styles/body.scss";
import Accueil from "./components/Accueil.jsx";
import APropos from "./components/APropos.jsx";
import Error404 from "./components/Error404.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Définition des routes dans le router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>        
        <Accueil />
      </div>
    ),
  },
  {
    path: "/a-propos",
    element: (
      <div>        
        <APropos />
      </div>
    ),
  },
  {
    path: "*",
    element: <div>      
        <Error404 />
    </div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

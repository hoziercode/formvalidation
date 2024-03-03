import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/home";
import CreateAccount from "../../pages/create_account/Create_account";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create_account",
    element: <CreateAccount />,
  },
]);

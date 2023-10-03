import { createBrowserRouter } from "react-router-dom/dist";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import Generator from "../components/Generator/Generator";
import Home from "../components/Home/Home";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute.js";
import Docs from "../components/Home/Docs.js";
import Contact from './../components/Home/Contact';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/generator",
        element: (
          <PrivateRoute>
            <Generator />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //   path: "/docs",
      //   element: <Docs/>,
      // },
      // {
      //   path: "/contact",
      //   element: <Contact/>,
      // },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default routes;

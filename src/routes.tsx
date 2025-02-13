import { RouteObject } from "react-router-dom";
import { Cart, Home, PhoneDetails, Phones } from "./pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/phones",
    element: <Phones />,
  },
  {
    path: "/phones/:id",
    element: <PhoneDetails />,
  },
];

export default routes;

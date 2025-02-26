import { Navigate, RouteObject } from "react-router-dom";
import { Cart, PhoneDetails, Phones } from "./pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/phones" />,
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

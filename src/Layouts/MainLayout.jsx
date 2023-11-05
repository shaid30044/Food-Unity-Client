import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AvailableFoods from "../Pages/AvailableFoods";
import AddFood from "../Pages/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest";
import PrivateRoutes from "../Routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods />,
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoutes>
            <AddFood />
          </PrivateRoutes>
        ),
      },
      {
        path: "/manageMyFoods",
        element: (
          <PrivateRoutes>
            <ManageMyFoods />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myFoodRequest",
        element: (
          <PrivateRoutes>
            <MyFoodRequest />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

export default router;

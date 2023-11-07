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
import FoodDetails from "../Pages/FoodDetails";
import UpdateFood from "../Pages/UpdateFood";
import Profile from "../Pages/Profile";

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
        path: "/food/:id",
        element: (
          <PrivateRoutes>
            <FoodDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-side-chi.vercel.app/food/${params.id}`
          ),
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
        path: "/updateFood/:id",
        element: (
          <PrivateRoutes>
            <UpdateFood />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-side-chi.vercel.app/food/${params.id}`
          ),
      },
      {
        path: "/manageMyFoods",
        element: (
          <PrivateRoutes>
            <ManageMyFoods />
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://assignment-11-server-side-chi.vercel.app/foods"),
      },
      {
        path: "/myFoodRequest",
        element: (
          <PrivateRoutes>
            <MyFoodRequest />
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://assignment-11-server-side-chi.vercel.app/foodRequest"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;

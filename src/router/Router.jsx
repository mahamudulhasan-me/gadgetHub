import { createBrowserRouter } from "react-router-dom";
import Customers from "../dashboard/Customers/Customers";
import Dashboard from "../dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/UserAccount/SignIn";
import SingleProduct from "../shared/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`https://gadgethub-server.vercel.app/product/${params.id}`),
      },
      { path: "signIn", element: <SignIn /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/customers",
        element: <Customers />,
      },
    ],
  },
]);

export default router;

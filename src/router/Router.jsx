import { createBrowserRouter } from "react-router-dom";
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
          fetch(`http://localhost:3000/product/${params.id}`),
      },
      { path: "signIn", element: <SignIn /> },
    ],
  },
]);

export default router;

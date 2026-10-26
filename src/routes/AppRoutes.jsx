import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../features/auth/pages/ui/LoginPage";
import RegisterPage from "../features/auth/pages/ui/RegisterPage";
import Homepage from "../shared/ui/Homepage";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
        path:"/home",
        element:<Homepage/>
    }
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;

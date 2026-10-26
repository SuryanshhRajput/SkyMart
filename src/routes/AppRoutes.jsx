import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../features/auth/pages/ui/LoginPage";
import RegisterPage from "../features/auth/pages/ui/RegisterPage";
import Homepage from "../shared/ui/Homepage";
import { useDispatch } from "react-redux";
import { addUser, finishHydration } from "../features/auth/state/authSlice";
import { useEffect, useMemo } from "react";
import PublicProtected from "./Protected/PublicProtected";
import MainProtected from "./Protected/MainProtected";
import ShopPage from "../features/products/ui/ShopPage";
import About from "../shared/ui/About";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (!storedUser) {
      dispatch(finishHydration());
      return;
    }

    try {
      const loggedInUser = JSON.parse(storedUser);
      if (
        loggedInUser &&
        typeof loggedInUser === "object" &&
        !Array.isArray(loggedInUser)
      ) {
        dispatch(addUser(loggedInUser));
      } else {
        dispatch(finishHydration());
      }
    } catch (error) {
      console.error("Unable to restore the logged-in user from localStorage.", error);
      dispatch(finishHydration());
    }
  }, [dispatch]);

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          element: <PublicProtected />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
        {
          path: "/home",
          element: <MainProtected />,
          children: [
            {
              path: "",
              element: <Homepage />,
            },
            {
                path:"shop",
                element:<ShopPage/>
            },
            {
                path:"about",
                element:<About/>
            }
          ],
        },
      ]),
    [],
  );

  return <RouterProvider router={router} />;
};

export default AppRoutes;

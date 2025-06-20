import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Men from "./components/Men.jsx";
import Women from "./components/Women.jsx";
import Kids from "./components/Kids.jsx";
import Cart from "./components/Cart.jsx";
import Error from "./components/Error.jsx";
import ProductContainer from "./components/ProductContainer.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Video from "./components/Video.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";


const video = lazy(() => import("./components/Video.jsx"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <ProductContainer />
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/:productId",
        element: <ProductDetails />
      },
      {
        path: "/video",
        element: <Suspense fallback={'<h1>Loading...</h1>'}><Video/></Suspense>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

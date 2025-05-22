import { StrictMode } from "react";
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
        path: "/:productId",
        element: <ProductDetails />
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

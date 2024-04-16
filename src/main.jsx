import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Shop, About, Contact } from "./components/index.js";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         { path: "/", element: <Home /> },
         { path: "/about-us", element: <About /> },
         { path: "/contact-us", element: <Contact /> },
         { path: "/shop", element: <Shop /> },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router}>
         <App />
      </RouterProvider>
   </React.StrictMode>
);

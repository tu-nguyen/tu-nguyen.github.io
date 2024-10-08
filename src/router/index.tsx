import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Test from "../pages/Test";
import V2 from "../pages/V2";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/test",
      element: <Test />,
    },
    {
        path: "/v2",
        element: <V2 />,
      },
      // {
      //   path: "/terminal",
      //   element: <Terminal />,
      // },
  ]);
  
  export default router;
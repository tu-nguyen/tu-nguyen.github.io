import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Test from "../pages/Test";

// import V1 from "../pages/V1";
import V2 from "../pages/V2";
import Terminal from "../pages/Terminal";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
        path: "test",
        element: <Test />,
      },
    // {
    //   path: "/v1",
    //   element: <V1 />,
    // },
    {
        path: "/v2",
        element: <V2 />,
      },
      {
        path: "/terminal",
        element: <Terminal />,
      },
  ]);
  export default router;
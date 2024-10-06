import React from "react";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import router from "./router";
import Homepage from "./pages/Homepage";
import Test from "./pages/Test";

// import V1 from "../pages/V1";
import V2 from "./pages/V2";
import Terminal from "./pages/Terminal";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Homepage />} />
          <Route path="v2" element={<V2 />} />
          <Route path="terminal" element={<Terminal />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
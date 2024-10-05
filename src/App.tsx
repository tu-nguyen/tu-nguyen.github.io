import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

// import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import About from './components/About'
// import Jobs from './components/Jobs'
// import Projects from './components/Projects'
// import Footer from './components/Footer'
// import $ from 'jquery'

// const jQuerycode = () => {
//   console.log("test")
// }



const App = () => {
  return <RouterProvider router={router} />;
}

export default App 
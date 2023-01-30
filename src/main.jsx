import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './pages/About';
import HomePage from './pages/HomePage';
import Greeting from './pages/Greeting';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <ErrorPage/>

  },
  {
    path: "/home",
    element: <HomePage/>,
    errorElement: <ErrorPage/>

  },
  {
    path: "/greeting/:name",
    element: <Greeting/>,
    errorElement: <ErrorPage/>

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

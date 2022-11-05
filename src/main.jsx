import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
// import "./index.css";
import Page from "./App";
import Contact from './contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

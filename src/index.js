import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from './App';
import Agenda from './Agenda';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/agenda",
    element: <Agenda />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
   document.getElementById('root')
);

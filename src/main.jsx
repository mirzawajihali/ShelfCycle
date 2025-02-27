import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Import Tailwind CSS


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Home from './component/Home/Home';
import DashBoard from './component/Dashboard/DashBoard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {path:'/', 
        element: <Home></Home>,
  },
  {
    path:"dashboard",
    element: <DashBoard></DashBoard>

  }
    ] },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);
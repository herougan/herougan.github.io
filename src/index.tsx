import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Pages
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import Main from "./routes/main";
import Test from "./routes/test";
import Roadmap from "./routes/roadmap";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <Test />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/road",
    element: <Roadmap />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/",
  //   // element: <div>Hello world!</div>,
  //   element: <Root />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

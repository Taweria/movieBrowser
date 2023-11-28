import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SearchPage from './pages/SearchPage.jsx'
import ProfilePage from './pages/Profile.jsx'
import Details from './pages/Details.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HashRouter as BrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {router}
    </RouterProvider>
  </React.StrictMode>,
);

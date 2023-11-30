import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SearchPage from './pages/SearchPage.jsx'
import ProfilePage from './pages/Profile.jsx'
import Details from './pages/Details.jsx'
import './Styles/index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from './pages/NotFound.jsx';

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
  {
  path: "*",
  element: <NotFound />,
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {router}
    </RouterProvider>
  </React.StrictMode>,
);

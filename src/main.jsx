import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SearchPage from './pages/SearchPage.jsx'
import ProfilePage from './pages/Profile.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

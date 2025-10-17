import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layouts/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Career from './Pages/Career/Carrer.jsx';
import Category from './Pages/Category.jsx/Category.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index:true,
        Component: Home,
      },
      {
        path:"/category/:id",
        Component: Category
      },
      {
        path: "/about",
        Component:About
      },
      {
        path:"/career",
        Component:Career
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)

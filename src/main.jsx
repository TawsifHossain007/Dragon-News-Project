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
import CategoryNews from './Components/CategoryNews/CategoryNews.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthRoot from './Layouts/AuthRoot.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import NewsDetails from './Pages/NewsDetails/NewsDetails.jsx';
import PrivateRoutes from './Provider/PrivateRoutes.jsx';
import Loading from './Components/Loading/Loading.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        path:"",
        Component: Home,
      },
      {
        path:"/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
         hydrateFallbackElement: <Loading></Loading>
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
  {
    path:"/auth",
    Component: AuthRoot,
    children: [
      {
        path:"/auth/login",
        Component: Login
      },
      {
        path:"/auth/register",
        Component: Register
      }
    ]
  },
  {
    path:"/news-details/:id",
    element: <PrivateRoutes>
       <NewsDetails></NewsDetails>
    </PrivateRoutes>,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path:"/*",
    element:<div>404 Not Found</div>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

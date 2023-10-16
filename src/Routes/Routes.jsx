import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Contact from "../Pages/Contact/Contact";
import SignUp from "../Pages/Login/SignUp";
import Login from "../Pages/Login/Login";
import PrivateAuth from "../Components/PrivateAuth/PrivateAuth";
import Service from "../Pages/Home/Service/Service";
import AllServices from "../Pages/AllServices/AllServices";
import About from "../Pages/About/About";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/service/:id',
          element:<PrivateAuth><ServiceDetails></ServiceDetails></PrivateAuth>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
    },
    {
      path:'/SignUp',
      element:<SignUp></SignUp>
  },
  {
    path:'/login',
    element:<Login></Login>
},
{
  path:'/service',
  element:<AllServices></AllServices>
},
{
  path:'/about',
  element:<About></About>
},
      ]
    },
  ]);
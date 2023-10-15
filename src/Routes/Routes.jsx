import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Contact from "../Pages/Contact/Contact";


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
          element:<ServiceDetails></ServiceDetails>
      },
      {
        path:'/about',
        element:<Contact></Contact>
    }
      ]
    },
  ]);
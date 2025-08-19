import {createBrowserRouter} from "react-router";
import App from "../App.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "../components/Login.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      }
      ,
      {
        path: "/orders",
        element: <div>Orders</div>
      },
      {
        path: "/about",
        element: <div>This is the about page. About this company</div>
      },
      {
        path: "/dashboard",
        element: <div>Dashoard</div>
      },
      
      {
        path: "/cart",
        element: <div>Cart</div>
      },
      {
      path: "/login",
      element: <Login/>
      },
    ]
  },
]);

export default router;
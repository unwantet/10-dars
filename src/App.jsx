import { Children } from "react";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import  MainLayout  from "./layout/MainLayout";


//pages
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      Children:[
        {
          index:true,
          element: <Home />
        }
      ]
    },
    {
      path: '/signin',
      element: <Signin/>
    },
    {
      path: '/signup',
      element: <Signup/>
    }
  ])
  return <RouterProvider router={routes}/>
}


export default App;
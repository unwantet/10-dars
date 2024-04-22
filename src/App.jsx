import { createBrowserRouter , RouterProvider } from "react-router-dom";
//layout
import  MainLayout  from "./layout/MainLayout";

import { Navigate } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import RetseptInfo from "./pages/RetseptInfo";

//components
import ProtectedRotes from "./components/ProtectedRotes";
import Create from "./pages/Create";

// context
import { GlobalContext } from "./context/useContextGlobal";
import { useContext } from "react";
import { useEffect } from "react";

// firebse

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import ThemeContainer from "./components/ThemeContainer";

//Form 

import {action as signupAction} from './pages/Signup'
import {action as signinAction} from './pages/Signin'

// loader
import { loader as retseptInfoLoader } from "./pages/RetseptInfo";


function App() {
const {user , dispatch , authChange} = useContext(GlobalContext);

const routes = createBrowserRouter([
    {
      path: "/",
      element:(
        <ProtectedRotes user={user}>
          <MainLayout />
        </ProtectedRotes>
        ), 
      children:[
        {
          index:true,
          element: <Home />
        },
        {
          path: '/create',
          element: <Create/>
        },
        {
          path: '/themeContainer',
          element: <ThemeContainer/>
        },
        {
          path: '/retseptInfo/:id',
          element: <RetseptInfo/>,
          loader: retseptInfoLoader
        }
      ]
    },
    {
      path: '/signin',
      element: user ? <Navigate to="/" /> :  <Signin/>,
      action: signinAction
    },
    {
      path: '/signup',
      element: user ? <Navigate to="/" /> :  <Signup/>,
      action: signupAction
    },
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type:"SIGN_IN",
        payload:user,
      })
      dispatch({
        type:"AUTH_CHANGE",
      })
    });
  }, [])

  return <>{authChange && <RouterProvider router={routes}/>}</>
}


export default App;
import React from 'react';
import Main from './pages/Main';
import Login from './pages/Login';
import ErrorURL from './pages/ErrorURL';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
 
} from "react-router-dom";
import Reg from './pages/Reg';

const Layout = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Outlet/>
    
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
     
      {
        path: "/",
        element: <Navigate to="/login" />
      },
      {
        path: `/login`,
        element: <Login/>
      },
      {
        path: `/main`,
        element: <Main/>
      },
      {
        path: `/reg`,
        element: <Reg/>
      },
    
       {
         path: "*",
         element: <ErrorURL/>
      }
    ]
  },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "*",
      element: <ErrorURL/>
    }
  
])
function App() {
  return (
    <div className="App">
     <RouterProvider router={router} /> 
    </div>
  );
}

export default App;

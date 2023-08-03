import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile/MyProfile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import AddUniversity from "../pages/AddUniversity/AddUniversity";
import Colleges from "../pages/Colleges/Colleges";
import Dashboard from "../pages/Dashboard/dashboard";
import MyUniversity from "../pages/MyUniversity/MyUniversity";
import AllUsers from "../pages/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: '404',
        element: <Error></Error>
      },
      {
        path: 'colleges',
        element: <PrivateRoute><Colleges></Colleges></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/university')
      },
      {
        path: 'my-profile',
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
        children: [
          {
            path: 'dashboard/:email',
            element: <Dashboard></Dashboard>,
            loader: ({ params }) => fetch(`http://localhost:5000/user?email=${params.email}`),
          },
          {
            path: 'my-university',
            element: <MyUniversity></MyUniversity>
          },
          {
            path: 'update-profile',
            element: <UpdateProfile></UpdateProfile>,
          },
          {
            path: 'add-university',
            element: <AdminRoute><AddUniversity></AddUniversity></AdminRoute>,
            // loader: (data) => {console.log(data.request.url.split('?email=')[1])
            // return null}
          },
          {
            path: 'all-users',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
          },
          {
            path: 'update-profile/:email',
            element: <UpdateProfile></UpdateProfile>,
            loader: ({ params }) => fetch(`http://localhost:5000/user?email=${params.email}`),
          }
        ]
      },
    ]
  },
]);
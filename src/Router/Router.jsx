import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyCollege from "../pages/MyCollege/MyCollege";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile/MyProfile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import AddUniversity from "../pages/AddUniversity/AddUniversity";
import Colleges from "../pages/Colleges/Colleges";

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
        path: 'my-college',
        element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
      },
      {
        path: 'my-profile',
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
        children: [
          {
            path: 'update-profile',
            element: <UpdateProfile></UpdateProfile>,
          },
          {
            path: 'add-university',
            element: <AddUniversity></AddUniversity>,
          },
          {
            path: 'update-profile/:id',
            element: <UpdateProfile></UpdateProfile>,
            loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)
          }
        ]
      },
      {
        path: 'colleges',
        element: <PrivateRoute><Colleges></Colleges></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/university')
      },
    ]
  },
]);
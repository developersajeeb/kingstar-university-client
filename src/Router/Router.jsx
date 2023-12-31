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
import Dashboard from "../pages/Dashboard/dashboard";
import MyUniversity from "../pages/MyUniversity/MyUniversity";
import AllUsers from "../pages/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import Error from "../pages/Error/Error";
import Universitys from "../pages/Universitys/Universitys";
import UniversityDetails from "../pages/UniversityDetails/UniversityDetails";
import Feedbacks from "../pages/Feedbacks/Feedbacks";
import AllUniversity from "../pages/AllUniversity/AllUniversity";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://collage-bookign-server.vercel.app/feedback/approval')
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
        path: 'all-university',
        element: <Universitys></Universitys>,
        loader: () => fetch('https://collage-bookign-server.vercel.app/university')
      },
      {
        path: 'university/:id',
        element: <PrivateRoute><UniversityDetails></UniversityDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://collage-bookign-server.vercel.app/university/${params.id}`)
      },
      {
        path: 'my-profile',
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
        children: [
          {
            path: 'dashboard/:email',
            element: <Dashboard></Dashboard>,
            loader: ({ params }) => fetch(`https://collage-bookign-server.vercel.app/user?email=${params.email}`),
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
            path: 'all-university',
            element: <AdminRoute><AllUniversity></AllUniversity></AdminRoute>,
            loader: () => fetch('https://collage-bookign-server.vercel.app/university')
          },
          {
            path: 'all-users',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
            loader: () => fetch('https://collage-bookign-server.vercel.app/users')
          },
          {
            path: 'feedbacks',
            element: <AdminRoute><Feedbacks></Feedbacks></AdminRoute>,
            loader: () => fetch('https://collage-bookign-server.vercel.app/feedback')
          },
          {
            path: 'update-profile/:email',
            element: <UpdateProfile></UpdateProfile>,
            loader: ({ params }) => fetch(`https://collage-bookign-server.vercel.app/user?email=${params.email}`),
          }
        ]
      },
    ]
  },
]);
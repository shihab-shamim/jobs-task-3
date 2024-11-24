import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../pages/Home/Home/Home"
import Dashboard from "../Layout/Dashboard"
import ViewProperty from "../pages/Dashboard/ViewProperty/ViewProperty"
import AddNewProperty from "../pages/Dashboard/AddNewProperty/AddNewProperty"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "viewProperty",
        element: <ViewProperty></ViewProperty>,
      },
      {
        path: "addNewProperty",
        element: <AddNewProperty></AddNewProperty>,
      },
    ],
  },
])

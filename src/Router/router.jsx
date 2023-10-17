import { createBrowserRouter } from "react-router-dom"
import Root from "../Root/Root"
import Home from "../pages/Home/Home"
import Register from "../pages/Register/Register"
import UpdateUser from "../pages/UpdateUser/UpdateUser"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                loader: ()=> fetch("https://user-management-server-7wbmovk4y-jubair-ahmeds-projects.vercel.app/users"),
                element: <Home/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/updateUser/:id",
                loader: ({params})=> fetch(`https://user-management-server-7wbmovk4y-jubair-ahmeds-projects.vercel.app/users/${params.id}`),
                element: <UpdateUser/>
            }
        ]
    }
])

export default router
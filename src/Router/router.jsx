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
                // loader: ()=> fetch("http://localhost:5000/users"),
                element: <Home/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/updateUser/:id",
                loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`),
                element: <UpdateUser/>
            }
        ]
    }
])

export default router
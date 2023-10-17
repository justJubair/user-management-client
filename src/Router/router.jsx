import { createBrowserRouter } from "react-router-dom"
import Root from "../Root/Root"
import Home from "../pages/Home/Home"
import Register from "../pages/Register/Register"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                loader: ()=> fetch("http://localhost:5000/users"),
                element: <Home/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    }
])

export default router
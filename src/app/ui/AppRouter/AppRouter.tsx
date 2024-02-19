import { routerConfig } from "app/config/routerConfig"
import { RouterProvider } from "react-router-dom"

export const AppRouter = () => {
    return (
        <RouterProvider router={routerConfig}/>
    )
}
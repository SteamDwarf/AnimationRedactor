import { Outlet } from "react-router"
import { Header } from "widgets/Header"

export const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
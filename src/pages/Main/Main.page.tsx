import { AnimationContextProvider } from "app/ui/AnimationContextProvider"
import { Outlet } from "react-router"
import { Header } from "widgets/Header"

export const Main = () => {
    return (
        <div>
            <AnimationContextProvider>
                <Header />
                <Outlet />
            </AnimationContextProvider>
        </div>
    )
}
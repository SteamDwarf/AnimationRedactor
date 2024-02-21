import { AnimationContextProvider } from '../AnimationContextProvider'
import { AppRouter } from '../AppRouter'

export const App = () => {

    return (
        <AnimationContextProvider>
            <AppRouter />
        </AnimationContextProvider>
    )
}
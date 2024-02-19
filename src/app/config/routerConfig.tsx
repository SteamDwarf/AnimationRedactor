import { AnimationRedactorPage } from 'pages/AnimationRedactor'
import { Main } from 'pages/Main'
import { PreviewPage } from 'pages/Preview'
import {createBrowserRouter} from 'react-router-dom'

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <AnimationRedactorPage />
            },
            {
                path: '/preview',
                element: <PreviewPage />
            }
        ]
    },
    
])
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from 'app/ui/App'
import { ErrorHandler } from 'app/ui/ErrorHandler'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorHandler>
            <App />
        </ErrorHandler>
    </React.StrictMode>,
)

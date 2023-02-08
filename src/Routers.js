import { createBrowserRouter } from "react-router-dom"

import App from "./components/layout/Layouts"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    }
])

export default router;
import { Routes, Route } from "react-router-dom"
import { APP_ROUTES } from "./routes"

export const AppRoutes = () => {
    return (
        <Routes>
            { APP_ROUTES.map(route => <Route key={route.path} path={route.path} element={route.element} render={route.render} />) }
        </Routes>
    )
}
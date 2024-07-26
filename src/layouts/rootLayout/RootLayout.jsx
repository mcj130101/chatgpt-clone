import { Outlet } from "react-router-dom"
import "./rootLayout.css"

const RootLayout = () => {
    return
    <div>
        <header></header>
        <main><Outlet></Outlet></main>
    </div>
}

export default RootLayout
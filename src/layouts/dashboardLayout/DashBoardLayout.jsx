import { Outlet } from "react-router-dom"


const DashBoardLayout = () => {
    return <div>
        dashboard layout 
        <main>
            <Outlet />
        </main>
    </div>
}

export default DashBoardLayout
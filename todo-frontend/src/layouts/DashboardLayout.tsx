import { Outlet } from "react-router-dom"

const DashboardLayout=()=>{
    return<div>
        <header>Header</header>
        <aside>Sidebar</aside>
        <main>
            <Outlet/>
        </main>
    </div>
}

export default DashboardLayout;
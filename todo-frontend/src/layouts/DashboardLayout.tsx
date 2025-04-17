import { Outlet } from "react-router-dom"
import Header from "../components/Header";

const DashboardLayout=()=>{
    return<div>
        <Header/>
        {/* <aside>Sidebar</aside> */}
        <main>
            <Outlet/>
        </main>
    </div>
}

export default DashboardLayout;
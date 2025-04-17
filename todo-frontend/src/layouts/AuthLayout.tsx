import { Outlet } from "react-router-dom"
import Names from "../constants/Names";
import Header from "../components/Header";

const AuthLayout = () => {
    return <div className=" min-h-screen w-full">
        <Header />
        <Outlet />
    </div>
}
export default AuthLayout;
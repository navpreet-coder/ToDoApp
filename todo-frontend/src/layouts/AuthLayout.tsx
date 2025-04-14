import { Outlet } from "react-router-dom"
import Names from "../constants/Names";

const AuthLayout = () => {
    return <div className="bg-yellow-50 ">
        <div className="flex flex-row bg-amber-300 items-center justify-center">

        <img width="50" height="50" src="https://img.icons8.com/nolan/64/tasklist.png" alt="tasklist" />
        <h2 className="font-extrabold text-4xl text-amber-600">{Names.APP_NAME}</h2>
        </div>
        <Outlet />
    </div>
}
export default AuthLayout;
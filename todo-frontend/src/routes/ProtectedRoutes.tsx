import { Navigate } from "react-router-dom"
import Path from "../constants/Path"
import { ReactElement } from "react"
type Props = {
    children:ReactElement
}
// const ProtectedRoutes = ({ children }: { children: ReactElement }) => {
const ProtectedRoutes = ({ children }:Props) => {
    const isAuthenticated = localStorage.getItem('token')
    console.log('see is authenticated',isAuthenticated);
    
    if (!isAuthenticated) {
        return <Navigate to={Path.SIGNIN} replace />
    }
    return <>{children}</>;
}

export default ProtectedRoutes;
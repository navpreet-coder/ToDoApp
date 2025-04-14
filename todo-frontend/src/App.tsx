import React from 'react'
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Path from './constants/Path'
import Signup from './pages/Signup'
import AuthLayout from './layouts/AuthLayout'
import ProtectedRoutes from './routes/ProtectedRoutes'
import DashboardLayout from './layouts/DashboardLayout'
import Home from './pages/Home'

const App = () => {
  // const {VITE_BASE_URL,VITE_NAV}=import.meta.env

  return <BrowserRouter>
    <Routes>
      {/* auth routes */}
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route element={<AuthLayout />}>
        <Route path={Path.SIGNUP} element={<Signup />} />
        <Route path={Path.SIGNIN} element={<Signin />} />
      </Route>

      <Route element={<ProtectedRoutes>
        <DashboardLayout />
      </ProtectedRoutes>
      }>

      <Route path={Path.HOME} element={<Home/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}
export default App
import React from "react"
import { Navigate, useLocation } from "react-router-dom"

export default function PrivateRoute({ children }) {
  const currentUser = localStorage.getItem('sasta-coupon-app');
  const location = useLocation();

  if(!currentUser) {
    return <Navigate to="/logIn" state={{path: location.pathname}}/>
  }

  return children;
}
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function Protected() {
  const isLogin = JSON.parse(localStorage.getItem("adminLogin"));
  return (
    isLogin ? <Outlet/> : <Navigate to={'/login'}/>
  );
}

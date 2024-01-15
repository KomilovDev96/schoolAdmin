import React, { useState } from "react";
import Home from "./pages/Home";
import { Contexts } from "./contexts/Contexts";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";

import Admin from "./pages/Admin";
import User from "./pages/User";
import School from "./pages/School";
import axios from "axios";
import Protected from "./Routes/Protected";
import UpdateUser from "./components/UpdateUser";
import CreateClass from "./pages/CreateClass";
import AllClass from "./pages/AllClass";
import Schedele from "./pages/Schedele";

export default function App() {
  const [black, setBlack] = useState(false);
  const [activeBar, setActiveBar] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [adminLoginToken, setAdminLoginToken] = useState(false);
  const location = "";
  const [showUser, setShowUser] = useState(true);
  const [showSchool, setShowSchool] = useState(true);
  const [showSchedele, setShowSchedle ] = useState(true)

  return (
    <div
      className={
        black
          ? "delay-100 w-full duration-100 font-dm h-[100vh] overflow-y-hidden bg-FbodyDarkMode"
          : "delay-100 duration-100  font-dm h-[100vh] overflow-y-hidden w-full bg-Fgray"
      }
    >
      <Contexts.Provider
        value={{
          black,
          location,
          setBlack,
          activeBar,
          setActiveBar,
          searchShow,
          setSearchShow,
          adminLoginToken,
          setAdminLoginToken,
          showUser,
          setShowUser,showSchool, setShowSchool ,
          showSchedele, setShowSchedle 
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Protected />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/user" element={<User />} />
            <Route path="/school" element={<School />} />
            <Route path="/updateUser/:id" element={<UpdateUser />} />
            <Route path="/addClass/:id" element={<CreateClass />} />
            <Route path="/allClass/:id" element={<AllClass />} />
            <Route path="/schedele/:id" element={<Schedele />} />
          </Route>
        </Routes>
      </Contexts.Provider>
    </div>
  );
}

//// classname code qisqartirish stlyes.jsx
//// sign signup forgot passowrd responsiveligi bn func

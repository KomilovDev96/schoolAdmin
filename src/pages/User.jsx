import React, { useContext, useState } from "react";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import { Contexts } from "../contexts/Contexts";
import { icons } from "../utilits/icons";
import { Link, useLocation } from "react-router-dom";
import AllUsers from "../components/AllUsers";
import AddUser from "../components/AddUser";

export default function User() {
  const { black, location ,showUser , setShowUser } = useContext(Contexts);
  const [password, setPassword] = useState(true);
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  
  return (
    <section
      className={
        black
          ? "bg-FbodyDarkMode flex items-start w-full delay-100 duration-100"
          : "flex items-start w-full delay-100 duration-100"
      }
    >
      <Aside />
      <div className="w-full">
        <Navbar />
        <h2 className="mb-[0px] flex items-center justify-between px-[30px] lg:text-[30px] text-left  mt-[20px] font-bold text-[24px]">
          User page
          <button
            className="px-[30px] w-[200px] py-[10px] text-[20px] bg-[crimson] text-white rounded-[5px] "
            onClick={() => setShowUser((prev) => !prev)}
          >
           {showUser ? 'Add Users' : 'All Users'}
          </button>
        </h2>
        {showUser ? <AllUsers /> : <AddUser />}
      </div>
    </section>
  );
}

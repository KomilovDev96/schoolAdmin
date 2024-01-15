import React, { useContext, useState } from "react";
import AllSchoool from "../components/AllSchool";
import AddSchool from "../components/AddSchool";
import { Contexts } from "../contexts/Contexts";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";

export default function School() {
  const { black ,showSchool, setShowSchool } = useContext(Contexts);
 
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
          Maktab sahifasi
          <button
            className="px-[30px] w-[250px] py-[10px] text-[20px] bg-[crimson] text-white rounded-[5px] "
            onClick={() => setShowSchool((prev) => !prev)}
          >
            {showSchool ? "Maktab yaratish" : "Maktablar"}
          </button>
        </h2>
        {showSchool ? <AllSchoool /> : <AddSchool />}
      </div>
    </section>
  );
}

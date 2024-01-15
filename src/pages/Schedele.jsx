import React, { useContext, useState } from "react";
import AllSchoool from "../components/AllSchool";
import AddSchool from "../components/AddSchool";
import { Contexts } from "../contexts/Contexts";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import AllScheedle from "../components/AllScheedle";
import AddSchedele from "../components/AddScheedle";

export default function Schedele() {
  const { black ,showSchedele, setShowSchedle } = useContext(Contexts);
 
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
          Dars jadvali
          <button
            className="px-[30px] w-[350px] py-[10px] text-[20px] bg-[crimson] text-white rounded-[5px] "
            onClick={() => setShowSchedle((prev) => !prev)}
          >
            {showSchedele ? "Dars jadvali yaratish" : "Dars jadvalini korish"}
          </button>
        </h2>
        {showSchedele ? <AllScheedle /> : <AddSchedele />}
      </div>
    </section>
  );
}

import React, { useContext } from "react";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import { Contexts } from "../contexts/Contexts";

export default function Admin() {
  const { black } = useContext(Contexts);
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
      </div>
    </section>
  );
}

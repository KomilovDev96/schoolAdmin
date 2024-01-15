import React, { useContext } from "react";
import { Contexts } from "../contexts/Contexts";
import Login from "../pages/Login";

export default function Home() {
  const { black } = useContext(Contexts);
  return (
    <div
      className={
        black
          ? " bg-FbodyDarkMode flex items-start w-full delay-100 duration-100"
          : "flex items-start w-full delay-100 duration-100"
      }
    >
      <div className="w-full">
        <Login />
      </div>
    </div>
  );
}

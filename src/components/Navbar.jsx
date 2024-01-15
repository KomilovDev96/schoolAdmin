import React, { useContext } from "react";
import { Contexts } from "../contexts/Contexts";
import dark from "../assets/img/icons8-dark-mode-50.png";
import dark2 from "../assets/img/icons8-dark-mode-48.png";
import { icons } from "../utilits/icons";
import { Link, useNavigate } from "react-router-dom";
import user from "../assets/img/icons8-user-24.png";
import AppBar from "./AppBar";

export default function Navbar() {
  const { setBlack, black, activeBar, setActiveBar, setSearchShow } =
    useContext(Contexts);

    const navigate = useNavigate()

    const handleLogout = () => {
      localStorage.removeItem('adminLogin')
      navigate('/login')
    }

  return (
    <>
      <nav
        className={
          black
            ? "bg-FdarkMode px-[10px] delay-100 duration-100 py-[15px] lg:px-[30px]  w-full lg:w-[100%] flex justify-between items-center"
            : "bg-white delay-100 duration-100 py-[15px] px-[10px] lg:px-[30px] w-full lg:w-[100%] flex justify-between items-center"
        }
      >
        <div className="block order-1  lg:hidden">
          <Link to={"/"} className="flex  items-center">
            {" "}
            <span
              className={
                black ? "text-white text-logo" : "text-Fblack text-logo"
              }
            >
              Logo
            </span>
          </Link>
        </div>

        <div className="w-full flex justify-between items-center">
          <h3 className="text-center w-[95%] text-[16px] ">
            {JSON.parse(localStorage.getItem("adminLogin"))?.name}
            <span className="text-[14px] block">
              {" "}
              {JSON.parse(localStorage.getItem("adminLogin"))?.role}
            </span>
          </h3>

          <div className="flex items-center">
            <button
              className="hidden lg:block"
              onClick={() => setBlack(!black)}
            >
              {black ? (
                <img className="w-[30px] h-[30px]" src={dark2} alt="" />
              ) : (
                <img className="w-[30px] h-[30px]" src={dark} alt="" />
              )}
            </button>

            <button
              onClick={() => setActiveBar(!activeBar)}
              className=" ml-[10px] order-0 block w-[20px] h-[20px] lg:hidden"
            >
              {icons.bars}
            </button>
                <button className="w-[20px] h-[20px]" onClick={handleLogout}>
                  {icons.logout}
                </button>
          </div>
        </div>
      </nav>
      <AppBar />
    </>
  );
}

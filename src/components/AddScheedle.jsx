import React, { useContext, useEffect, useState } from "react";
import { allUsers } from "../utilits/alluser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { Contexts } from "../contexts/Contexts";
import TimePicker from 'react-time-picker';
export default function AddSchedele() {
  const [first, setFirst] = useState(1);
  const [data, setData] = useState([]);
  const [deleteUser, setDeleteUser] = useState("");
  const { black, showSchool, setShowSchool } = useContext(Contexts);

  const navigate = useNavigate();
  // get all user

  useEffect(() => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("adminLogin"))?.token
          }`,
        },
      };
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/class/getall`, config)
        .then((data) => {
          setData(data.data);
        })
        .catch((err) => console.log("xatolik yuz berdi"));
    } catch (error) {
      console.log("xatolik yuz berdi");
    }
  }, [deleteUser]);

  /// Pagination 20 users

  const cardProductCount = 10;
  const lastProductKey = first * cardProductCount;
  const firstProductKey = lastProductKey - cardProductCount;
  const res = data?.slice(firstProductKey, lastProductKey);

  const numbers = [
    ...Array(Math.ceil(data.length / cardProductCount) + 1).keys(),
  ].slice(1);

  console.log(res);
  // handleUpdate user

  const handleUpdateUser = (id) => {
    navigate(`/updateUser/${id}`);
  };

  // handleDelete user

  const handleDeleteUser = (id) => {
    console.log(id);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("adminLogin"))?.token
          }`,
        },
      };
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/user/delete/${id}`, config)
        .then((data) => {
          setDeleteUser(data);
        })
        .catch((err) => console.log("xatolik yuz berdi"));
    } catch (error) {
      console.log("Xatolik yuz berdi");
    }
  };

  const week = ["Dushanba", "Seshanba", "Chorshanba", "Juma", "Shanba"];
  const times = [
    "1-para",
    "2-para",
    "3-para",
    "4-para",
    "5-para",
    "6-para",
    "7-para",
    "8-para",
    "9-para",
    "10-para",
  ];

  return (
    <section
      className={
        black
          ? "bg-FbodyDarkMode flex items-start w-full delay-100 duration-100"
          : "flex items-start w-full delay-100 duration-100"
      }
    >
    
      <div className="w-full">
    
      
        <div className="px-[30px] lg:px-[30px] mt-[30px] ">
          <form action="">
            <input
              type="text"
              placeholder="Darslik nomi"
              className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
            />
            <input
              type="text"
              placeholder="Ustoz ismi"
              className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
            />
                        <input
              type="text"
              placeholder="Sinfxona"
              className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
            />
              <select
              className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
              name=""
            id=""
          >
            {week.map((element, value) => {
              return (
                <option key={value} value={element}>
                  {element}
                </option>
              );
            })}
          </select>
          <TimePicker    />
            <button className="lg:mt-[30px] mt-[15px] py-[18px] w-full text-white text-[20px] font-bold bg-Fpurple rounded-[10px]">
              Dars yaratish
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

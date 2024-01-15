import React, { useContext, useEffect, useState } from "react";
// import { Stepper,Step } from 'react-form-stepper';
import {
  Stepper,
  Step,
  Button,
  Typography,
  input,
} from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import { allUsers } from "../utilits/alluser";
import { Contexts } from "../contexts/Contexts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function AddSchoolStep() {
  const [schoolName, setschoolName] = useState("");
  const [userId, setUserId] = useState("");

  const { setShowSchool } = useContext(Contexts);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  /// handle addUser

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
        .get(`${process.env.REACT_APP_BASE_URL}/user/getall`, config)
        .then((data) => {
          setData(data.data);
        })
        .catch((err) => console.log("xatolik yuz berdi"));
    } catch (error) {
      console.log("xatolik yuz berdi");
    }
  }, []);

  const handleAddUserSchool = (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("adminLogin"))?.token
          }`,
        },
      };
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/scool/create`,
          {
            title: schoolName,
            userId: userId,
          },
          config
        )
        .then((data) => {
          // console.log(data)
          // setData(data.data)
          setShowSchool(true);
        })
        .catch((err) => console.log("xatolik yuz berdi"));
    } catch (error) {
      console.log("xatolik yuz berdi");
    }

    error &&
      setTimeout(() => {
        setError(false);
      }, 1000);
  };

  return (
    <div className="px-[30px] mt-[10px]">
      <div className="w-full">
        <h2 className="mb-[0px] lg:text-[30px] text-center font-bold text-[20px]">
          Maktab yaratish sahifasi
        </h2>

        <form action="" onSubmit={(e) => handleAddUserSchool(e)}>
          <input
          required
            onChange={(e) => setschoolName(e.target.value)}
            type="text"
            placeholder="Maktab nomini kiriting"
            className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
          />
          <h2 className="mb-[5px] lg:text-[16px] text-left font-bold text-[14px]">
            Maktabga userni biriktirish
          </h2>
          <div className="overflow-scroll max-h-[500px] py-[20px]">
            {data.length > 0 ? (
              data.map((element) => (
                <div className="mb-[5px]">
                  <input
                  required
                    type="radio"
                    name="userId"
                    onChange={(e) => setUserId(element._id)}
                  />{" "}
                  <span className="ml-[10px] text-[14px] font-medium">
                    {element.username}
                  </span>
                </div>
              ))
            ) : (
              <h2>Foydalanuvchi yuklanmoqda</h2>
            )}
          </div>
          <button className="lg:mt-[30px] mt-[15px] py-[18px] w-full text-white text-[20px] font-bold bg-Fpurple rounded-[10px]">
            Maktab yaratish
          </button>
        </form>
      </div>
    </div>
  );
}

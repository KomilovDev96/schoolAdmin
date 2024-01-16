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
import { week } from "../utilits/menu";

import TimeRangePicker from "@wojtekmaj/react-timerange-picker";


export function AddSchoolStep() {
  const [schoolName, setschoolName] = useState("");
  const [classroom, setClassroom] = useState("");
  const [classes, setClasses] = useState("");
  const [teacher, setTeacher] = useState("");
  const [lesson, setLesson] = useState("");
  const [timepic, setTimePic] = useState("");
  const [weeks, setWeeks] = useState("");
  const [userId, setUserId] = useState("");

  const { setShowSchool } = useContext(Contexts);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  console.log(userId)
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
          `${process.env.REACT_APP_BASE_URL}/school/create`,
          {
            name: schoolName,
            userID: userId,
            classes: [
              {
                name: classes,
                days: [
                  {
                    name: weeks,
                    lessons: [
                      {
                        teacher: teacher,
                        roomNumber: classroom,
                        subject: lesson,
                        startDate : timepic[0] ,
                        endDate : timepic[1] ,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          config
        )
        .then((data) => {
          console.log(data)
          // setData(data.data)
          // setShowSchool(true);
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

        <form
          className="pt-[25px] pb-[25px] h-[650px] overflow-scroll"
          action=""
          onSubmit={(e) => handleAddUserSchool(e)}
        >
          <input
            required
            onChange={(e) => setschoolName(e.target.value)}
            type="text"
            placeholder="Maktab nomini kiriting"
            className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
          />
          <input
            required
            onChange={(e) => setClasses(e.target.value)}
            type="text"
            placeholder="Sinf kiriting"
            className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
          />

          <input
            required
            onChange={(e) => setTeacher(e.target.value)}
            type="text"
            placeholder="Ustozni kiriting"
            className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
          />

          <input
            required
            onChange={(e) => setClassroom(e.target.value)}
            type="text"
            placeholder="Sinfxonani kiriting"
            className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
          />
          <input
            required
            onChange={(e) => setLesson(e.target.value)}
            type="text"
            placeholder="Darslikni kiriting"
            className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
          />

          <div className="flex justify-between">
            <div className="w-[68%]">
              <h2 className="mb-[5px] lg:text-[16px] text-left font-bold text-[14px]">
                Dars kunini kiriting
              </h2>
              <select
                onChange={(e) => setWeeks(e.target.value)}
                className="px-[20px] py-[16px] rounded-[10px] w-[100%] mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
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
            </div>
            <div className="w-[30%]">
              <h2 className="mb-[5px] lg:text-[16px] text-left font-bold text-[14px]">
                Dars vaqtini kiriting
              </h2>

              <TimeRangePicker
                onChange={(onChange) => setTimePic(onChange) }
                value={timepic}
                closeClock={false}
                disableClock={false}
                className="px-[20px] bg-white py-[16px] m-auto rounded-[10px] w-[100%] mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
              />
            </div>
          </div>

          <h2 className="mb-[5px] lg:text-[16px] text-left font-bold text-[14px]">
            Maktabga foydalanuvchini biriktirish
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

        <button className="lg:mt-[30px] mt-[15px] py-[18px] w-full text-white text-[20px] font-bold bg-[green] rounded-[10px]">
            Bosh sahifaga o'tish
          </button>
      </div>
    </div>
  );
}

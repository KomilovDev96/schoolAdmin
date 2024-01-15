import React, { useContext, useEffect, useState } from "react";
import { Contexts } from "../contexts/Contexts";
import { icons } from "../utilits/icons";
import Error from "../components/Error";
import { AddSchoolStep } from "./AddSchoolStep";
import axios from "axios";

export default function AddSchool() {
  // const { black } = useContext(Contexts);
  // const [password, setPassword] = useState(true);
  // const [pass, setPass] = useState("");
  // const [email, setEmail] = useState("");
  // const [deleteUser , setDeleteUser] = useState('')
  // const [data , setData] = useState([])
  // const [error, setError] = useState(false);

  // /// handle addUser


  // useEffect(() => {
  //   try {
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${JSON.parse(localStorage.getItem("adminLogin"))?.token}`,
  //       },
  //     };
  //       axios
  //       .get(
  //         `${process.env.REACT_APP_BASE_URL}/user/getall`,
  //         config
  //       )
  //       .then((data) => {
  //         setData(data.data)
  //       })
  //       .catch((err) => console.log('xatolik yuz berdi'));
  //   } catch (error) {
  //     console.log('xatolik yuz berdi');
  //   }
  // }, [deleteUser])




  // const handleAddUser = (e) => {
  //   e.preventDefault();
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //     setError(true);
  //   }

  //   error &&
  //     setTimeout(() => {
  //       setError(false);
  //     }, 1000);
  // };

  return (
    <div>

        <AddSchoolStep />
      {/* <form
        onSubmit={(e) => handleAddUser(e)}
        action=""
        className="px-[25px] lg:px-[350px]"
      >
        <div className="relative">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email adress"
            className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email adress"
            className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email adress"
            className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email adress"
            className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email adress"
            className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
          />
          <input
            onChange={(e) => setPass(e.target.value)}
            type={password ? "text" : "password"}
            placeholder="Enter your password"
            className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
          />

          <p
            className="absolute top-[50%] right-[5%] translate-y-[-50%]"
            onClick={() => setPassword(!password)}
          >
            {password ? icons.eyes : icons.eyes}
          </p>

          <button className="lg:mt-[30px] mt-[15px] py-[18px] w-full text-white text-[20px] font-bold bg-Fpurple rounded-[10px]">
            All User
          </button>
        </div>
      </form>
      {error && <Error />} */}
    </div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { Contexts } from "../contexts/Contexts";
import { icons } from "../utilits/icons";
import Error from "../components/Error";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Aside from "./Aside";

export default function UpdateUser() {
  const { black, setShowUser } = useContext(Contexts);
  const [password, setPassword] = useState(true);
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState({});
  const [name, setName] = useState(data?.username);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const id = useParams();

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
          setData(data.data?.find((element, value) => element._id === id.id));
        })
        .catch((err) => console.log("xatolik yuz berdi"));
    } catch (error) {
      console.log("xatolik yuz berdi");
    }
  }, []);

  const handleUpdateUser = (e) => {
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
        .put(
          `${process.env.REACT_APP_BASE_URL}/user/update/${id.id}`,
          {
            username: name,
            password: pass,
          },
          config
        )
        .then((data) => {
          navigate('/user')
         })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={
        black
          ? "bg-FbodyDarkMode flex items-start w-full delay-100 duration-100"
          : "flex items-start w-full delay-100 duration-100"
      }
    >
      <Aside />
      <div>
        <Navbar />
        <form
          onSubmit={(e) => handleUpdateUser(e)}
          action=""
          className="px-[25px] lg:px-[350px]"
        >
          <div className="relative">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="name"
              placeholder="Enter your name"
              className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
            />
            <input
              onChange={(e) => setPass(e.target.value)}
              type={password ? "text" : "password"}
              placeholder="Enter your new password"
              className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
            />

            <p
              className="absolute top-[50%] right-[5%] translate-y-[-50%]"
              onClick={() => setPassword(!password)}
            >
              {password ? icons.eyes : icons.eyes}
            </p>

            <button className="lg:mt-[30px] mt-[15px] py-[18px] w-full text-white text-[20px] font-bold bg-Fpurple rounded-[10px]">
              Update
            </button>
          </div>
        </form>
        {error && <Error />}
      </div>
    </div>
  );
}

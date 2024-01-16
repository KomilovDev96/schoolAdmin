import React, { useContext, useState } from "react";
import { Contexts } from "../contexts/Contexts";
import { icons } from "../utilits/icons";
import Error from "../components/Error";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddUser() {
  const { black, setShowUser } = useContext(Contexts);
  const [password, setPassword] = useState(true);
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [error, setError] = useState(false);

  const navigate = useNavigate();
  console.log(process.env.REACT_APP_BASE_URL);

  /// handle addUser

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("adminLogin"))?.token
          }`,
        },
      };
      await axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/auth/register`,
          {
            username: name,
            password: pass,
            role: "user",
          },
          config
        )
        .then((data) => {
          console.log(data)
          setShowUser(true);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
    error &&
      setTimeout(() => {
        setError(false);
      }, 1000);
  };

  return (
    <div>
      <form
        onSubmit={(e) => handleAddUser(e)}
        action=""
        className="px-[25px] lg:px-[350px]"
      >
        <div className="relative">
          <input
            onChange={(e) => setName(e.target.value)}
            type="name"
            placeholder="Enter your name"
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
            Foydalanuvchi qo'shish
          </button>
        </div>
      </form>
      {error && <Error />}
    </div>
  );
}

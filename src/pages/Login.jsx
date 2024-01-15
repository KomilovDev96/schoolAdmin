import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { icons } from "../utilits/icons";
import dark from "../assets/img/icons8-dark-mode-50.png";
import dark2 from "../assets/img/icons8-dark-mode-48.png";
import { Contexts } from "../contexts/Contexts";
import axios from "axios";

export default function Login() {
  const {
    black,
    setBlack,
    bars,
    setbars,
    search,
    setsearch,
    checkbox,
    setcheckbox,
  } = useContext(Contexts);
  const [password, setPassword] = useState(true);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  console.log(process.env.REACT_APP_BASE_URL);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      //  await axios
      //     .post(`${process.env.REACT_APP_BASE_URL}/api/admin/login`, {
      //       email: 'alex@mail.ru',
      //       password: "12345678",
      //     })
      //     .then((response) => console.log(response))
      //     .catch((err) => console.log(err));

      await axios
        .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
          username: name,
          password: pass,
        })
        .then((response) => {
          console.log(response)
          const res = {
            token : response?.data.token ,
            name : response?.data.user.username ,
            role : response?.data.user.role ,
            id : response?.data.user.id ,

          }
          localStorage.setItem('adminLogin' , JSON.stringify(res))
          navigate('/admin')
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative w-full h-[100vh]">
      <nav className="flex items-center w-full  py-[10px] px-[30px] justify-between border-solid border-b-2 border-Fbl">
        <Link to={"/"} className="flex items-center">
          {" "}
          <span className="text-logo text-Fbalck">logo</span>
        </Link>
        <button
          onClick={() => setBlack(!black)}
          className="text-red-600 lg:mr-[40px] mr-[10px] w-[40px] h-[40px]"
        >
          {black ? <img src={dark2} alt="" /> : <img src={dark} alt="" />}
        </button>
      </nav>
      <div className="mt-[20px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] ">
        <h2 className="mb-[0px] lg:text-[30px] text-center font-bold text-[24px]">
          Login
        </h2>

        <h4 className='flex items-center after:content-[""] after:block after:h-[1px] after:bg-[#e6e8ec] after:w-[230px] before:content-[""] before:block before:h-[1px] before:bg-[#e6e8ec] before:w-[230px]'>
          <span className="m-[14px]"></span>
        </h4>
        <form
          onSubmit={(e) => handleLogin(e)}
          action=""
          className="bg-white rounded-[10px] p-[20px] lg:mb-[24px] mb-[10px]"
        >
          <h2>Email</h2>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="enter your email adress"
            className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
          />
          <h2>Password</h2>
          <div className="relative">
            <input
              onChange={(e) => setPass(e.target.value)}
              type={password ? "text" : "password"}
              placeholder="enter your password"
              className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
            />

            <p
              className="absolute top-[50%] right-[5%] translate-y-[-50%]"
              onClick={() => setPassword(!password)}
            >
              {password ? icons.eyes : icons.eyes}
            </p>
          </div>

          <button className="lg:mt-[30px] mt-[15px] py-[18px] w-full text-white text-[20px] font-bold bg-Fpurple rounded-[10px]">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

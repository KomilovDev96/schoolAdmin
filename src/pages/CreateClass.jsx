import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import { Contexts } from '../contexts/Contexts';
import axios from 'axios';

export default function CreateClass() {
    const { black ,showSchool, setShowSchool } = useContext(Contexts);

    const [className ,setClassName] = useState('')

    const id = useParams()

    const navigate = useNavigate()
    console.log(id)
    const handleCreateClass = (e) => {
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
          `${process.env.REACT_APP_BASE_URL}/class/create/`,
          {
            name: className,
            school: id.id
          },
          config
        )
        .then((data) => {
          console.log(data)
            navigate('/school')
          // setData(data.data)
        //   setShowSchool(true);

        })
        .catch((err) => console.log("xatolik yuz berdi"));
    } catch (error) {
      console.log("xatolik yuz berdi");
    }
    }

  return (
    <section
    className={
      black
        ? "bg-FbodyDarkMode flex items-start w-full delay-100 duration-100"
        : "flex items-start w-full delay-100 duration-100"
    }
  >
    <Aside />
    <div className='w-full'>
    <Navbar />

    <div className="px-[30px] mt-[10px]">
    <h2 className="mb-[0px] lg:text-[30px] text-center font-bold text-[20px]">
           Sinf sahifasi
        </h2>

        <form action="" onSubmit={(e) => handleCreateClass(e)}>
             <input
           onChange={(e) => setClassName(e.target.value)} 
            type="text"
            placeholder="Sinf nomini kiriting"
            className="px-[20px] py-[16px] rounded-[10px] w-full mt-[15px] mb-[15px] border-solid border-2 border-Fbl"
          />
            <button className=' className="lg:mt-[30px] mt-[15px] py-[18px] w-full text-white text-[20px] font-bold bg-Fpurple rounded-[10px]"'>Sinfni yaratish</button>
        </form>
    </div>
    
    </div>
    
   </section>
  )
}

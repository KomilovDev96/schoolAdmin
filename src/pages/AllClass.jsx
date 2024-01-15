import React, { useContext, useEffect, useState } from "react";
import { allUsers } from "../utilits/alluser";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { Contexts } from "../contexts/Contexts";
export default function AllClass() {
  const [first, setFirst] = useState(1);
  const [data , setData] = useState([])
  const [deleteUser , setDeleteUser] = useState('')
  const { black ,showSchool, setShowSchool } = useContext(Contexts);

  const navigate = useNavigate()
  // get all user

  const id = useParams()

 
  useEffect(() => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("adminLogin"))?.token}`,
        },
      };
        axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/class/getall/${id.id}`,
          config
        )
        .then((data) => {
          setData(data.data)
        })
        .catch((err) => console.log('xatolik yuz berdi'));
    } catch (error) {
      console.log('xatolik yuz berdi');
    }
  }, [deleteUser])

    /// Pagination 20 users
  
    const cardProductCount = 10;
    const lastProductKey = first * cardProductCount;
    const firstProductKey = lastProductKey - cardProductCount;
    const res = data?.slice(firstProductKey, lastProductKey);
  
    const numbers = [
      ...Array(Math.ceil(data.length / cardProductCount) + 1).keys(),
    ].slice(1);

console.log(res)
  // handleUpdate user

  const handleUpdateUser = (id) => {
    navigate(`/updateUser/${id}`)
  };

  // handleDelete user

  const handleDeleteUser = (id) => {
    console.log(id)
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("adminLogin"))?.token}`,
        },
      };
        axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/user/delete/${id}`,
          config
        )
        .then((data) => {
           setDeleteUser(data)
        })
        .catch((err) => console.log("xatolik yuz berdi"));
    } catch (error) {
      console.log('Xatolik yuz berdi');
    }
  };

  return (
    <section
    className={
      black
        ? "bg-FbodyDarkMode flex items-start w-full delay-100 duration-100"
        : "flex items-start w-full delay-100 duration-100"
    }
  >
    <Aside />
    <div className="w-full">
        <Navbar />
        <h2 className="mb-[0px] flex items-center justify-between px-[30px] lg:text-[30px] text-left  mt-[20px] font-bold text-[24px]">
          Sinflar sahifasi
     
        </h2>
    <div className="px-[30px] lg:px-[30px] mt-[30px] ">
      {data.length > 0 ? (
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-left rounded-[3px] text-sm font-light border-2 border-neutral-500">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-6 py-4 text-center">
                        #
                      </th>
                      <th scope="col" class="px-6 py-4 text-center">
                        Maktab nomi
                      </th>
                      {/* <th scope="col" class="px-6 py-4">
                        Familyasi
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Email
                      </th> */}
                      <th scope="col" class="px-6 py-4 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {res?.map((element, value) => {
                      return (
                        <tr
                          key={value}
                          class="border-b dark:border-neutral-500"
                        >
                          <td class="whitespace-nowrap px-6 py-4 font-medium text-center">
                            {first != 1
                              ? value + 1 + firstProductKey
                              : value + 1}
                          </td>
                          <td onClick={() => navigate(`/schedele/${element._id}`)} class="whitespace-nowrap px-6 py-4 text-center">
                            {element.name}
                          </td>
 
                          <td class="whitespace-nowrap px-6 py-4 text-center">
                            <button onClick={() => handleDeleteUser(element._id)} className="px-[20px] py-[5px] bg-red-600 text-white rounded-[3px]">
                              Delete
                            </button>
                            <button onClick={() => handleUpdateUser(element._id)} className="px-[20px] ml-[5px] py-[5px] bg-green-600 text-white rounded-[3px]">
                              Update
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <ul className={"flex justify-center mt-[20px]"}>
                  {numbers.map((element, value) => (
                    <li
                      key={value}
                      onClick={() => setFirst(element)}
                      className={
                        first === element
                          ? "text-white p-[5px] mr-[10px] bg-[crimson] w-[30px] h-[30px] flex items-center justify-center rounded-[3px] "
                          : "p-[5px] mr-[10px] bg-black w-[30px] h-[30px] text-white flex items-center justify-center rounded-[3px]"
                      }
                    >
                      {element}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="mb-[0px] text-center px-[30px] lg:text-[30px] mt-[20px] font-bold text-[24px]">
          Hech qanday foydalanuvchi yo'q
        </h2>
      )}
    </div>
    </div>
  </section>
  );
 
}

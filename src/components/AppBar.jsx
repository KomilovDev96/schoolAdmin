import React, { useContext } from 'react'
import { icons } from '../utilits/icons'
import { Link } from 'react-router-dom'
import dark from '../assets/img/icons8-dark-mode-50.png'
import dark2 from '../assets/img/icons8-dark-mode-48.png'
import { Contexts } from '../contexts/Contexts'
import user from '../assets/img/icons8-user-24.png'

export default function AppBar() {
    const { setBlack, black } = useContext(Contexts)
    return (
        <div className={black ? 'fixed bottom-0  w-full lg:hidden left-0 bg-FdarkMode py-[15px] flex justify-around items-center' : 'fixed bottom-0  w-full lg:hidden left-0 bg-white py-[15px] flex justify-around items-center'}>
            <button>{icons.alert}</button>
            <button onClick={() => setBlack(!black)}>
                {black ? <img className='w-[30px] h-[30px]' src={dark2} alt="" /> : <img className='w-[30px] h-[30px]' src={dark} alt="" />}
            </button>
            <Link to={'/login'}>
                <img className='w-[35px] h-[35px]' src={user} alt="" />
            </Link>
        </div>
    )
}

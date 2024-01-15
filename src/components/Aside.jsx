import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../utilits/icons'
import { menu } from '../utilits/menu'
import { Contexts } from '../contexts/Contexts'

export default function Aside() {
    const { black, activeBar } = useContext(Contexts)
    const [activeMenu, setActiveMenu] = useState('Dashboard')
     return (
        <aside className={!activeBar ? 'delay-200 h-[100vh] duration-500 w-full fixed left-[-200%] top-[60px] lg:relative lg:left-[0px] lg:top-[0px] lg:w-[15%]' : '-[100vh] delay-200 duration-500 fixed left-[0%] top-[60px] lg:relative lg:left-[0px] lg:top-[0px] w-full lg:w-[15%]'}>
            <div className={black ? "w-full bg-FdarkMode delay-100 duration-100 h-full py-[30px] px-[24px]" : 'w-full  delay-100 duration-100 bg-white h-full py-[30px] px-[24px]'}>
                <Link className='hidden lg:flex lg:items-center'> <span className={black ? 'text-white text-logo' : 'text-Fblack text-logo'}>Logo</span></Link>

                <ul className='lg:mt-[35px] lg:[&>*:nth-child(9)]:mt-[100px]'>
                    {
                        menu.map((element, value) => {
                            return (black ? <li onClick={() => setActiveMenu(element.linkName)} className={element.linkName == activeMenu ? 'mb-[10px] rounded-[6px] w-[90%] p-[8px] bg-FbodyDarkMode !text-white' : 'mb-[10px] rounded-[6px] w-[90%] p-[8px] '} key={value}>
                                <Link to={element.slug} className={black ? 'flex items-center text-menu text-white' : 'flex items-center text-menu text-Ftextgray'}>{element.icons}
                                    <span className='ml-[8px]'>{element.linkName}</span></Link>
                            </li> : <li onClick={() => setActiveMenu(element.linkName)} className={element.linkName == activeMenu && black == false ? 'mb-[10px] rounded-[6px] w-[90%] p-[8px] bg-Fgray !text-white' : 'mb-[10px] rounded-[6px] w-[90%] p-[8px] '} key={value}>
                                <Link to={element.slug} className={black ? 'flex items-center text-menu text-white' : 'flex items-center text-menu text-Ftextgray'}>{element.icons}
                                    <span className='ml-[8px]'>{element.linkName}</span></Link>
                            </li>)

                        })
                    }
                </ul>
            </div>
        </aside >
    )
}

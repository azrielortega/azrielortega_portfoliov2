"use client"

import React, { useState } from 'react'
import { useTheme } from 'next-themes'

import Image from "next/image";
import menuIcon from "./icons/menu-icon.svg";
import shibaIcon from "./icons/shiba-icon.svg"

import Link from "next/link";


// font-[font]
const Navbar = () => {
    let { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    let [first, setFirst] = useState(true)
    let [open, setOpen] = useState(false);

    const sun = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`text-black duration-500 w-4 h-4`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                )
                
    const moon = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`duration-500 w-4 h-4`}>
                    <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                </svg>
                )

    const switchTheme = () => {
        if (first) setFirst (false);

        if (theme === 'dark'){
            setTheme('light');
        }
        else{
            setTheme('dark');
        }
        console.log(theme)
    }

    let links = [
        {name:"About", link:"#about"},
        {name:"Experience", link:"#experience"},
        {name:"Work", link:"#work"},
        {name:"Contact", link:"#contact"}
    ];

  return (
    <nav className = "flex dark:bg-mid-teal bg-day-navbar justify-center shadow-md text-white duration-500">
        <div className = "md:w-[780px] w-full h-full">
            <div className = "md:flex items-center md:px-5 px-10 py-4">
                <div className = 'font-bold text-xl cursor-pointer flex items-center text-gray'>
                    <span href="#"><Image alt="shiba dog icon" className = "hover:rotate-0 -rotate-12 duration-500"src={shibaIcon} width={20} alt=""/></span>
                    Azriel
                </div>
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-10 top-5 cursor-pointer md:hidden p-1 rounded-lg'>
                        <Image src={menuIcon} alt="menu icon" className='w-5'/>             
                </div>

                <ul className={`md:flex md:pb-0 pb-12 absolute md:static md:bg-none dark:bg-mid-teal bg-day-navbar
                ${open ? 'top-15 opacity-100':' top-[-490px]'} md:opacity-100 opacity-0 px-16 right-0 md:shadow-none shadow-lg duration-500`}>
                    {
                        links.map((link)=>(
                            <li key={link.name} className='md:ml-4 text-sm md:my-0 my-12'>
                                <Link href={link.link} className = 'hover:text-underline duration-500'>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                { first ?
                    (
                        <div className = "w-4/12 grid place-items-end">
                            <button onClick = {()=>switchTheme()}className = {`grid place-items-center rounded-md w-[30px] h-[30px] md:sticky absolute right-20 top-5 bg-night`}>
                                {moon}
                            </button>
                        </div>
                    ):
                    (
                        <div className = "w-4/12 grid place-items-end">
                            <button onClick = {()=>switchTheme()}className = {`grid place-items-center rounded-md w-[30px] h-[30px] md:sticky absolute right-20 top-5 bg-day dark:bg-night`}>
                                {currentTheme === 'dark' ? moon : sun}
                            </button>
                        </div>
                    )
                }
            </div>
        </div>  
    </nav>
  )
}

export default Navbar
"use client"

import React  from 'react'
import Image from "next/image";
import { GithubFilled } from '@ant-design/icons';

const ProjectModal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;
    return ( 
        <div className = {`fixed inset-0 backdrop-blur-sm flex justify-center items-center duration-500`}>
            <div className = "md:w-[700px] md:h-[850px] md:mx-0 mx-5 w-full h-[500px] flex flex-col">
                <button className = "dark:text-white text-day-text text-xl place-self-end" 
                onClick = { () => onClose() }>X</button>
                <div className = "dark:bg-mid-teal bg-day-pink-accent rounded-xl h-full dark:text-white text-day-text shadow-lg overflow-y-auto">
                    <div className = "rounded-2xl w-full md:h-[400px] h-[200px] bg-grey relative">
                        <Image
                        src={project.img}
                        alt="Image of a Project"
                        style={{objectFit: "cover", overflow:'hidden'}}
                        loading="lazy"
                        fill = {true}
                        />
                    </div>
                    <div className = "w-full grid grid-cols-1 place-items-center">
                        <div className = "w-11/12">
                            <div className = "text-2xl mt-5 text-center">{project.title}</div>
                            <div className = "text-lg mt-5">Tech Used:</div>
                            <div className = "pt-5 px-4 flex flex-wrap">
                                {
                                    project.tech.map((t) =>(
                                    <div className = 'dark:bg-light-teal dark:text-bright-teal bg-day-green-quote text-black mx-1 mb-2 py-0.5 px-5 rounded-md text-sm'>{t}</div>
                                    ))
                                }
                            </div>
                            <div className = "text-lg mt-5">Project Description:</div>
                            <div className = 'px-4 mt-3'>{project.long_desc}</div>
                            <div className = "mt-5 grid grid-cols-1 place-items-center pb-5">
                                <div className = "w-[30px] h-[30px] cursor-pointer">
                                    <a href={project.github}><GithubFilled className = "dark:text-white text-day-text text-3xl"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
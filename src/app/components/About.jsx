import React from 'react'
import Image from "next/image";
import mePic from './icons/Me.jpg'

const About = () => {
  return (
    <div className = "flex justify-center pt-10 dark:text-white text-day-text">
        <div className = "sm:w-[660px] w-full h-full sm:px-6 px-10">
            <div className = "grid sm:grid-cols-5 grid-cols-1">

                <div className = "flex items-center justify-center sm:order-last">
                    <Image src={mePic} className='border-4 dark:border-white border-day-text rounded-full w-40'/>
                </div>

                <div className = "sm:col-span-4 sm:py-10 py-6">
                    <div className = "font-bold sm:text-3xl text-2xl"> Azriel Matthew Ortega</div>
                    <div className = "text-sm">
                        Student, Aspiring Software Engineer and Data Scientist
                    </div>
                </div>

            </div>
            <div className = "w-full">
                <div id = "about" className = 'text-l font-bold underline pb-2'> About </div>
                <div className = 'text-sm font-normal'> 
                    Hi! I'm Matt, I am born and raised in the Philippines. I am currently a senior college student at De La Salle University studying Computer Science with specialization in Software Technology.
                    I love to take photographs and travel. I am <span className = 'dark:text-bright-teal text-day-green-accent'>passionate</span> about technology and its capabilities it has to offer to create a positive impact in our society.
                <br/>
                <br/>
                    Currently, I'm interested in working on software engineering and data-focused projects. I love people and they always find ways to intrigue me. I enjoy helping people and creating meaningful applications for them.
                    With expertise in Python, Java, C++ and web development, I aim to make a positive impact on the world and be part of the change for the better good of society.
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
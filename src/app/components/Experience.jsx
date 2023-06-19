"use client"

import React, { useState } from 'react';

const Experience = () => {
    let experiences = [
        {   
            id : '0',
            role : "Software Developer Intern",
            shortcut : "Digiteer",
            company:"Digiteer", 
            date:"JAN 2022 - APR 2022", 
            tasks : ["Collaborated with a team of developers to create a test mail server solution using React and Postman",
                    "Worked with developers to identify and resolve defects and bugs",
                    "Performed functional, integration and regression testing to ensure software quality",
                    "Conducted usability testing and provided feedback on the user experience" ]
        },
        {   
            id : '1',
            role : "Software Engineer (Developer and Quality Assurance)",
            shortcut : "Freelance",
            company:"Freelance", 
            date:"JULY 2021 - MAR 2022", 
            tasks : ["Collaborated with a team of developers to create a web-based Publicity Tracker for an university organization using Node.js, Express, Vue, and MongoDB",
                    "Developed a Mobile-based bookstore application and Covid-19 Tracker for a local high-school consisting of 1000+ students using Java and Firebase",
                    "Designed and developed automated test scripts using Selenium" ]
        },
    ]

    let [company, setCompany] = useState('0');

  return (
    <div className = "flex justify-center pt-16 sm:mb-0 mb-14">
        <div className = "sm:w-[660px] w-full sm:h-[330px] h-[450px] sm:px-6 px-10 pb-10">
            <div className="w-full">
                <div id="experience" className = "text-l font-bold underline pb-8">Experience</div>
                <div className = "grid sm:grid-cols-5 h-full grid-cols-1">
                    <div className ="">
                        <ul className = "sm:h-[250px] h-full flex sm:flex-col sm:items-start items-center flex-grow sm:overflow-y-auto sm:overflow-x-hidden overflow-x-auto">
                        {
                            experiences.map((experience) => (
                                <li key={experience.company}>
                                    <div onClick = {()=>setCompany(experience.id)}className = "sm:border-l-2 sm:rounded-tr-lg sm:rounded-br-lg sm:rounded-bl-none sm:rounded-tl-none sm:w-screen rounded-lg py-2 sm:pl-4 px-5 dark:hover:bg-light-teal hover:bg-day-pink-accent cursor-pointer duration-500">{experience.shortcut}</div>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                    <div className = "sm:col-span-4 pl-5 sm:pt-0 pt-6">
                        <div className = "flex flex-row">
                            <div className = "font-bold text-xl">
                                {experiences[parseInt(company)].role}
                                <span className = "font-bold text-xl dark:text-bright-teal text-day-green-accent pl-3">@{experiences[parseInt(company)].company}</span>
                            </div>
                        </div>
                        <div className = "pt-1 text-sm">{experiences[parseInt(company)].date}</div>
                        <ul className = "list-disc font-normal list-inside pl-5 pt-5">
                        {
                            experiences[parseInt(company)].tasks.map((task) =>(
                                <li key={task} className = "text-sm">{task}</li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience

/*
{
                                experiences[parseInt(company)].tasks.map((task) => task(
                                    <li className = "text-sm">{task}</li>
                                ))
                                
                            }

                            {experiences[parseInt(company)].role}
*/
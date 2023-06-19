"use client"

import React, { useState } from 'react'
import Project from './ProjectComponent'
import ProjectModal from './ProjectModal'

const Work = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [projectId, setProjectId] = useState (-1);

  const openModal = (id) => {
    setProjectId(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const projects = [
    {
      id: 0,
      img:'/Hands_And_Fingers.jpg',
      title:'Predict Hands and Fingers',
      short_desc : 'A machine learning project that focuses on predicting the number of fingers raised in an image and identifying which hand was used.',
      long_desc:"A machine learning project that focuses on predicting the number of fingers raised in an image and identifying which hand was used. The model used for this project was experimented on with two popular neural network architectures, ResNet and MobileNet. In addition to building the model, data analysis and modeling were also included in the Jupyter notebook. This involved processing and preparing the dataset, exploring the data to identify any patterns or anomalies, and selecting the appropriate features for training the model. The Jupyter notebook also included various machine learning techniques for improving the model's accuracy and performance, such as hyperparameter tuning and regularization.",
      tech:['Python', 'Machine Learning'],
      github: "https://github.com/azrielortega/ML-Hands-and-Fingers"
    },
    {
      id: 1,
      img:'/Mutya.png',
      title:'Mutya',
      short_desc : 'A 2D Game about Philippine Mythological Creatures Developed with Unity',
      long_desc:"Mutya is a 2D game developed using C# and Unity. Embark on a captivating adventure through three levels, encountering the enchanting Philippine mythological creatures. Immerse yourself in stunning visuals, engaging gameplay, and discover the rich folklore of the mythical realms.",
      tech:['C#', 'Unity'],
      github:"https://github.com/FonzyLima/mutya"
    },
    {
      id: 2,
      img:'/Profs_To_Pick.png',
      title:'Profs To Pick',
      short_desc : 'See all professors in DLSU',
      long_desc:'This professor finder application is built using VueJS and MongoDB, with a focus on practicing good DevOps skills. The app enables students to rate and review their professors, while the use of Selenium and RobotFramework ensures the quality of the app through automated testing. Additionally, this project aims to practice CI/CD pipeline for efficient software delivery and maintenance.',
      tech:['JavaScript', 'MongoDB', 'CSS', 'HTML'],
      github : "https://github.com/azrielortega/Profs-To-Pick"
    },
    {
      id: 3,
      img:'/Perfect_Plate.png',
      title:'Perfect Plate',
      short_desc : 'Recipe app for mobile, showcase dishes & search recipes.',
      long_desc:"This is a recipe app developed in Java for mobile devices. Users can showcase their dishes, add ingredients and preparation methods, and search for recipes. The app provides a user-friendly interface for easy navigation and is a convenient tool for discovering new recipes and sharing cooking skills.",
      tech:['Android Studio', 'Firebase', 'Java'],
      github: "https://github.com/azrielortega/Perfect_Plate"
    },
  ]
  return (
    <div className = "flex justify-center pt-10">
      <div className = "sm:w-[660px] w-full h-full sm:px-6 px-10">
        <div className="w-full">
            <div id = "work" className = "text-l font-bold underline pb-6">Works</div>
        </div>
        <div className = "grid sm:grid-cols-2 grid-cols-1 gap-5">
          {
            projects.map((project) => (
              <Project onOpen = { () => openModal(project.id) }project={project}/>
            ))
          }
        </div>
        <div className = 'mt-5 w-full grid place-items-center'>
          <a href="https://github.com/azrielortega">
            <button className = "border dark:border-dark-teal dark:bg-dark-teal dark:hover:border-bright-teal bg-day-green-quote border-day-green-quote hover:border-day-green-accent px-8 py-3 rounded-lg duration-500 hover:px-10">My Works</button>
          </a>
          <div className = 'my-5'>View all my works here</div>
        </div>
      </div>
      <ProjectModal isOpen = {isOpen} onClose = { () => closeModal() } project = {projects[projectId]}/>
    </div>
  )
}

export default Work
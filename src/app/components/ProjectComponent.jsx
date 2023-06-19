import Image from "next/image";

const ProjectComponent = (props) => {
  const project = props.project

  return (
    <div className = "">
      <div onClick = { () => props.onOpen() }
      className = "border dark:border-teal dark:hover:border-bright-teal border-day-pink-bg hover:border-day-green-accent grid grid-cols-1 place-items-center px-5 py-10 rounded-2xl duration-500 h-[400px]"> 
          <div className = "rounded-2xl w-[275px] h-[165px] bg-grey relative">
              <Image
              src={project.img}
              alt="Image of a Project"
              style={{objectFit: "cover", overflow:'hidden', borderRadius:'15px' }}
              loading="lazy"
              fill = {true}
              />
          </div>
          <div className = "w-[275px] pt-5 flex flex-wrap">
            {
              project.tech.map((t) =>(
                <div className = 'dark:bg-light-teal dark:text-bright-teal bg-day-green-quote text-black mx-1 mb-2 py-0.5 px-5 rounded-md text-xs'>{t}</div>
              ))
            }
          </div>
          <div className = "font-bold text-l text-center pt-4 pb-2"> {project.title}</div>
          <div className = "text-sm text-center"> {project.short_desc} </div>
      </div>
    </div>
  )
}

export default ProjectComponent
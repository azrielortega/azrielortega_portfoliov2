import React from 'react'
import { GithubFilled, LinkedinFilled } from '@ant-design/icons';

const Contact = () => {
  return (
    <div className = "flex justify-center py-10">
        <div className = "sm:w-[660px] w-full h-full sm:px-6 px-10">

            <div id="contact" className = "text-center font-bold text-2xl pb-5">Contact Me</div>

            <div className = "w-full grid place-items-center ">
                <div className = "flex gap-5">
                    <div className = "w-[30px] h-[30px] cursor-pointer">
                        <a href="https://github.com/azrielortega"><GithubFilled className = "dark:text-white text-day-text text-3xl"/></a>
                    </div>
                    <div className = "w-[30px] h-[30px] cursor-pointer">
                        <a href="https://www.linkedin.com/in/azrielortega/"><LinkedinFilled className = "dark:text-white text-day-text text-3xl"/></a>
                    </div>
                </div>
            </div>

            <div className = "text-xs text-center py-5 text-dark-grey">© 2023 Azriel Matthew Ortega. All Rights Reserved.</div>
        </div>
    </div>
  )
}

export default Contact
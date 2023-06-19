import React from 'react'
import Typewriter from 'typewriter-effect';

const Quote = () => {
  return (
    <div className = "flex justify-center pt-10">
        <div className = "sm:w-[660px] w-full h-full sm:px-6 px-10 grid place-items-center">
            <div className = " dark:bg-dark-teal bg-day-green-quote bg-opacity-75 rounded-xl w-full py-5 text-center text-sm">
            <Typewriter
              options={{
                strings: ['"Start before you are ready"'],
                autoStart: true,
                loop: false,
                pauseFor: 99999999
              }}
            />
            </div>
        </div>
    </div>
  )
}

export default Quote
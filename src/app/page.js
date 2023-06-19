"use client"

import Navbar from './components/Navbar'
import Quote from './components/Quote'
import About from './components/About'
import Experience from'./components/Experience'
import Work from'./components/Work'
import Contact from'./components/Contact'

import { ThemeProvider } from 'next-themes'

export default function Home() {
  return (
    <div>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar/>
        <main className='dark:bg-teal bg-day-pink-bg duration-500'>
          <Quote/>
          <About/>
          <Experience/>
          <Work/>
          <Contact/>
        </main>
      </ThemeProvider>
    </div>
  )
}

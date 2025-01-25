"use client"
/* eslint-disable */

import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Resume from "../components/Resume"
import Achievement from "../components/Achievement"
import Blog from "../components/Blog"
import Contact from "../components/Contact"

export default function Home() {
  const [activePage, setActivePage] = useState("about")
  const [showContacts, setShowContacts] = useState(true)

  const renderActivePage = () => {
    switch (activePage) {
      case "about":
        return <About />
      case "resume":
        return <Resume />
      case "achievement":
        return <Achievement />
      case "blog":
        return <Blog />
      case "contact":
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <main className="min-h-screen bg-[#1a1a1a] p-4 pb-32 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto md:flex md:gap-6">
        {/* Sidebar */}
        <div className="hidden md:block md:w-[400px] shrink-0 md:sticky md:top-6 md:self-start">
          <div className="bg-[#2a2a2a] rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-[#333] rounded-2xl overflow-hidden">
                <img
                  src="https://avatars.githubusercontent.com/u/73454209?v=4"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Prasoon Kushwaha</h1>
              <div className="inline-block bg-[#333] px-4 py-2 rounded-full">
                <p className="text-gray-300">Web developer</p>
              </div>
              <div className="inline-block bg-[#333] px-4 py-2 my-2 rounded-full">
                <p className="text-gray-300">Competitve Programmer</p>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>

        {/* Mobile Profile Card */}
        <div className="md:hidden relative bg-[#2a2a2a] rounded-2xl p-6 mb-4">
          <button
            onClick={() => setShowContacts(!showContacts)}
            className="absolute right-4 top-4 px-4 py- text-[#ffd700] hover:text-[#ffd700]/80 transition-colors text-sm"
          >
            {showContacts ? "Hide Contacts" : "Show Contacts"}
            
          </button>
          <div className="flex items-center gap-6">
            <div className="w-44 h-24 rounded-2xl overflow-hidden bg-[#333]">
              <img
                src="https://avatars.githubusercontent.com/u/73454209?v=4"
                //     alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white mb-2 my-4">Prasoon Kushwaha</h1>
              <div className="inline-block bg-[#333] px-4 py-2 my-2 rounded-full ">
                <p className="text-gray-300 text-sm">Web developer</p>
              </div>
              <div className="inline-block bg-[#333] text-sm px-4 py-2 rounded-full">
                <p className="text-gray-300">competitve programmer</p>
              </div>
            </div>
          </div>
          {showContacts && <Sidebar className="mt-6" />}
        </div>

        {/* Main Content Area */}
        <div className="flex-grow md:w-[calc(100%-432px)]">
          {/* Desktop Navigation */}
          <div className="hidden md:block mb-6">
            <div className="bg-[#2a2a2a] rounded-2xl w-[53.5vw]">
              <Navbar setActivePage={setActivePage} activePage={activePage} />
            </div>
          </div>

          {/* Content */}
          <div className="bg-[#2a2a2a] rounded-2xl overflow-hidden">
            <div className="md:h-[calc(100vh-8rem)] overflow-y-auto">{renderActivePage()}</div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Navbar setActivePage={setActivePage} activePage={activePage} />
      </div>
    </main>
  )
}


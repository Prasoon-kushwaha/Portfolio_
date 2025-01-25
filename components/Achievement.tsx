"use client"
/* eslint-disable */


import { useState } from "react"
import Image from "next/image"

const categories = ["All", "Competitve Programming", "Machine Learning", "Web development"]

const projects = [
  {
    title: "Secured #1740 Rank globally",
    category: "Competitve Programming",
    image: "/images/hackercup.png",
    link: "https://www.facebook.com/codingcompetitions/hacker-cup/2024/certificate/428155079907254?source=facebook",
  },
  {
    title: "Top Scorer",
    category: "Web development",
    image: "/images/top_scorer.png",
    link: "https://github.com/Prasoon-kushwaha/top_scorer",
  },
  {
    title: "OpenCV Attendance",
    category: "Machine Learning",
    image: "/images/Opencv.png",
    link: "https://github.com/Prasoon-kushwaha/OpenCV_Attendence",
  },
  {
    title: "Rated 1742 among top 5% Global",
    category: "Competitve Programming",
    image: "/images/Codechef.png",
    link: "https://www.codechef.com/users/prasoonkushwah",
  },
  {
    title: "ICPC Regionalist among top 200 teams in India",
    category: "Competitve Programming",
    image: "/images/icpc.png",
    link: "#",
  },
  {
    title: "Over 500 problems solved",
    category: "Data Structures",
    image: "/images/LC.png",
    link: "https://leetcode.com/u/Random-Variable/",
  },
]

export default function Achievement() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="p-6 md:p-8 animate-fade-in">
      <header className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 animate-slide-in">Achievements & Projects</h2>
        <div className="w-12 h-1 bg-[#ffd700] rounded-full animate-scale-in"></div>
      </header>

      <div className="flex flex-wrap gap-4 mb-8 animate-slide-in" style={{ animationDelay: "0.1s" }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm md:text-base transition-colors ${
              activeCategory === category ? "text-[#ffd700]" : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className="group relative overflow-hidden rounded-xl bg-[#2f2f2f] animate-scale-in"
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="w-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
              <p className="text-[#ffd700]">{project.category}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

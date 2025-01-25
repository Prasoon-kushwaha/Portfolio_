"use client"
/* eslint-disable */

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Clear the form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <article className="content-area p-8">
      <header className="mb-8">
        <h2 className="text-3xl font-bold mb-2 animate-in">Contact</h2>
        <div className="w-12 h-1 bg-secondary rounded-full animate-in"></div>
      </header>

      <div className="mb-8 rounded-md overflow-hidden animate-in stagger-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5657354084183!2d76.18811517479791!3d31.481130074231963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391adb198180014f%3A0xbf76347093a3aa9a!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%20Una!5e0!3m2!1sen!2sch!4v1737815268663!5m2!1sen!2sch"
          width="100%"
          height="400"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="animate-in stagger-2">
        <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              className="w-full px-4 py-3 rounded-md bg-secondary/0 border border-muted focus:border-primary transition-colors"
              required
            />
          </div>
          <div className="space-y-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-md bg-secondary/0 border border-muted focus:border-primary transition-colors"
              required
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={6}
              className="w-full px-4 py-3 rounded-md bg-secondary/0 border border-muted focus:border-primary transition-colors"
              required
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="px-8 py-3 bg-primary/20 rounded-md hover:bg-primary/50 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </article>
  )
}

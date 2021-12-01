import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className="flex flex-col items-center container py-16">
      <img src="https://res.cloudinary.com/deirqouhr/image/upload/v1607186037/Frame_10_vz07ak.png" alt="profile" draggable="false" className="w-1/2 md:w-52 mb-8" />
      <h1 style={{color: '#0C032F'}} className="font-header text-4xl md:text-5xl text-center font-bold mb-4">
        Hi, I’m Jesco,
      </h1>
      <p className="text-gray-500 text-lg leading-relaxed max-w-xl text-center mb-7">
        I design and build websites using tools like <span className="highlight">React, Svelte and SVG.</span> When I’m not freelancing I work on my own company,{' '}
        <strong>otion</strong>
      </p>
      <div className="flex space-x-4">
        <Link href="/contact">
          <a className="btn-primary">Hire Me</a>
        </Link>
        <Link href="/blog">
          <a className="btn-secondary">My Blog</a>
        </Link>
      </div>
    </div>
  )
}

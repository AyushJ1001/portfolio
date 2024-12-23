'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Header() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {['about', 'experience', 'skills', 'projects', 'awards', 'contact'].map((section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                onClick={(e) => handleClick(e, section)}
                className={`capitalize transition-colors ${
                  activeSection === section ? 'text-blue-400' : 'text-white hover:text-blue-300'
                }`}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}


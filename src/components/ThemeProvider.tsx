'use client'

import { useEffect, useState } from 'react'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Check saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 px-3 py-1 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
      >
        Toggle {theme === 'light' ? '🌙' : '☀️'}
      </button>
      {children}
    </>
  )
}

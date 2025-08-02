// src/app/page.tsx
'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [notes, setNotes] = useState<string[]>([])

  useEffect(() => {
    // Load notes from localStorage (optional, coming later)
    const storedNotes = localStorage.getItem('notes')
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes))
    }
  }, [])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Welcome 👋</h2>

      {notes.length === 0 ? (
        <p className="text-gray-500">No notes yet. Start by creating one!</p>
      ) : (
        <ul className="space-y-2">
          {notes.map((note, index) => (
            <li key={index} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
              {note}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

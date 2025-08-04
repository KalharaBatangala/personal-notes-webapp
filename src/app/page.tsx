'use client'

import { useState, useEffect } from 'react'
import { Trash2 } from 'lucide-react'


export default function Home() {
  const [notes, setNotes] = useState<string[]>([])
  const [newNote, setNewNote] = useState('') // new: holds current input

  // Load notes from localStorage on first load
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes')
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes))
    }
  }, [])

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  // Add a new note
  const handleAddNote = () => {
    if (newNote.trim() === '') return // ignore empty notes
    setNotes([newNote, ...notes]) 
    setNewNote('') // clear the input
  }

  // Delete a note
  const handleDeleteNote = (indexToDelete: number) => {
  const updatedNotes = notes.filter((_, index) => index !== indexToDelete)
  setNotes(updatedNotes)
}


  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Welcome 👋</h2>

      {/* Input + Button */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write your note here..."
          className="flex-1 px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white"
        />
        <button
          onClick={handleAddNote}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add Note
        </button>
      </div>

      {/* Note list or empty message */}
      {notes.map((note, index) => (
      <li
        key={index}
        className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded shadow"
      >
        <span>{note}</span>
        <button
          onClick={() => handleDeleteNote(index)}
          className="text-red-600 hover:text-red-800 font-semibold"
        >
          <Trash2 size={20} className="mt-1" />

        </button>
      </li>
    ))}

    </div>
  )
}

import { useState } from "react"

export default function NoteApp() {
    const [notes, setNotes] = useState ([])
    const [inputValue, setInputValue] = useState ("")
  
    const handleAddNote = () => {
        if (inputValue.trim() !== '') {
            setNotes([...notes, inputValue])
            setInputValue('')
        }
    }
    const handleDeleteNota = (index) => {
        const updateNotes = [...notes]
        updateNotes.splice(index, 1)
        setNotes(updateNotes)
    }
  return (
   
    <div>

        <h1>Notas</h1>
        <input type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        />
        <button onClick={handleAddNote}>Agregar Nota</button>
        <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
        </ul>
        <button onClick={handleDeleteNota}>Eliminar</button>
    </div>
  )
}


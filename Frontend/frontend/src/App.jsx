import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [note, setNote] = useState(0)

  const fetchNotes = async()=>{
      const response = await axios.get('http://localhost:3050/notes')
      const info = await response.data
      console.log(info.notes)
      await setNote(info.notes)

  }
  useEffect(()=>{
    fetchNotes()
  },[])

  return (
    <>
     
    </>
  )
}

export default App

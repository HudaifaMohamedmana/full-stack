import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Index from './components/Index'
// import Form from './components/Form'

function App() {
  const [notes, setNotes] = useState()
  const [createForm,setCreateForm] = useState({
    title:'',
    body: '',
  })
  const [upDateForm,setUpDateForm] = useState({
    _id: null,
    title: "",
    body: "",
  });

  const fetchNotes = async()=>{
      const response = await axios.get('http://localhost:3050/notes')
      const info = await response.data
      
      await setNotes(info.notes)
      console.log(info.notes)

  }
  const createNote = () => {};
  useEffect(()=>{
    fetchNotes()
  },[])

  return (
    <>
      <div className="formMajor">
        <form onSubmit={createNote}>
          <div>
          <input
            type="text"
            className="newFm"
            name=""
            value=""
            placeholder="Enter Title"
            onChange=""
          />
          <input
            type="text"
            className="newFm"
            name=""
            value=""
            placeholder="Enter Body"
            onChange=""
          />
          </div>
          <button className='submit' type="submit"> Note(+)</button>
        </form>
        <hr />
        <p>New Form</p>

        {/* NEW form  */}
        {/* Edit form  */}
        <hr />
        <p>Edit Form</p>
        <hr />
        <p>Update Form</p>
        {/* Update form  */}
      </div>
     {notes ? <Index info = {notes}/>:<p>no notes evelbel</p>}
    </>
  )
}

export default App

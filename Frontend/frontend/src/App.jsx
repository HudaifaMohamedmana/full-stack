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
  const createNote = async (e) => {
    e.preventDefault();
    // stops default behavior of submit button
    const res = await axios.post("http://localhost:3050/notes",createForm);
    setNotes(() => [res.data.note, ...notes]);
    // once state is updated, we no longer need it in inputs so we clear vv
    setCreateForm(() => ({
      title: "",
      body: "",
    }));
  };
  const updateCreateFormField = (e) => {
    const { name, value } = e.target;
    // take vals off inout
    console.log({ name, value });

    setCreateForm(() => ({
      ...createForm,
      [name]: value,
    }));
  };
const toggleUpdate = async(note) => {
  setUpDateForm({
    
    title: title,
    body: body
  })
}


  //--------------------------------------
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
            name="title"
            value={createForm.title}
            placeholder="Enter Title"
            onChange={updateCreateFormField}
          />
          <input
            type="text"
            className="newFm"
            name="body"
            value={createForm.body}
            placeholder="Enter Body"
            onChange={updateCreateFormField}
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

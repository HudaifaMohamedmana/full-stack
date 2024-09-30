require('dotenv').config()
const express = require('express')
const PORT = process.env.port || 3000
const app = express()
const connectToDb = require('./db/connectToDb')
const NoteC = require('./controllers/noteC')
connectToDb()
//-----------------------------------------------------------------------------------------------

app.get(`/notes`,NoteC.fetchNotes)

app.post(`/notes`,NoteC.createNote)

app.get(`/notes/:id`,NoteC.fetchNote)

app.put(`/notes/:id`,NoteC.updateNote)

app.delete(`/notes/:id`,NoteC.deleteNote)



//------------------------------------------------------------------------------------------------
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
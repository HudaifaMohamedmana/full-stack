const Note = require('../models/noteM');

const fetchNotes = async(req,res) => {
    const notes = await Note.find();
    res.json({notes});
}

const fetchNote = async(req,res) => {
    const id = req.params.id;
    const note = await Note.findById(id);
    res.json({note});
}

const createNote = async(req,res) => {
    const { title, body } = req.body;
    const note = await Note.create({title:title,body:body});
    res.json({note});
}

const updateNote = async(req,res) => {
    const id = req.params.id;
    const {title,body} = req.body;
    const note = await Note.findByIdAndUpdate(id, {title:title,body:body});
    res.json({note});
}

const deleteNote = async(req,res) => {
    const id = req.params.id;
    await Note.deleteOne({_id:id});
    res.json({success:"Record Deleted Successfully"} );

}


module.exports = {
    fetchNotes,
    fetchNote,
    createNote,
    updateNote,
    deleteNote
}

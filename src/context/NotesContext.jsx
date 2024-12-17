import { children, createContext, useState } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [ notes, setNotes ] = useState([{id:1, title:'Primera nota', text:'hola :v'}, {id:2, title:'Segunda nota', text:'Simón prro >:v'}])
    const [ noteId, setNoteId ] = useState(3);
    const [ editNoteId, setEditNoteId ] = useState(0)

    const [ idEditNote, setIdEditNote ] = useState(0);
    const [ selectedNote, setSelectedNote ] = useState(null);

    const handleSelectNote = (note) => {
        setSelectedNote(note)
        setIdEditNote(0)
    }

    const handleAddNote = () => {
        setSelectedNote(null)
        setIdEditNote(0)
    }

    const handleEditNote = (id) => {
        setIdEditNote(id)
    }

    function deleteNote(id){
        const filteredNotes = notes.filter((note) => note.id !== id)
        setNotes(filteredNotes);/* 
        setIdEditNote(null); 
        setSelectedNote(null);*/
    }

    function editNote(id, title, text){
        const editedNotes = notes.map((note) => 
            note.id === id ? {id, title, text} : note
        )
        setNotes(editedNotes);
    } 

    function addNote(title, text){
        const modNote = {
            id: noteId,
            title: title,
            text: text            
        }
        setNotes((prev) => [...prev, modNote])
        setNoteId((prev) => prev + 1);
    }

    return(
        <NotesContext.Provider value={{ handleEditNote, handleSelectNote, handleAddNote, idEditNote, setIdEditNote, selectedNote, setSelectedNote, notes, addNote, deleteNote, editNote, editNoteId, setEditNoteId}}>
            {children}
        </NotesContext.Provider>
    )
}

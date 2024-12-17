import { useContext, useEffect, useState } from "react"
import { Button } from "./Button"
import { NotesContext } from "../context/NotesContext";

export const InputNote = ({id}) => {
    const { notes, addNote, editNote } = useContext(NotesContext)

    const [ noteTitle, setNoteTitle ] = useState('');
    const [ noteText, setNoteText ] = useState('');
    const [ editedNoteTitle, setEditedNoteTitle ] = useState('');
    const [ editedNoteText, setEditedNoteText ] = useState('');

    useEffect(() => {
        if(id != 0){
            const noteToEdit = notes.find((note) => note.id === id);
            if(noteToEdit != null){
                setEditedNoteText(noteToEdit.text);
                setEditedNoteTitle(noteToEdit.title);
            }
        }/*
        NO NECESITO VACIAR LOS INPUTS DESPUÉS DE EDITAR!!!
        else
            setEditedNoteText('')
            setEditedNoteTitle('')
        } */
    }, [id, notes])

    const handleAddNewNote = () => {
        addNote(noteTitle, noteText)
        setNoteTitle('')
        setNoteText('')
    }

    const handleEditNote = () => {
        editNote(id, editedNoteTitle, editedNoteText)
        
        alert('Nota Guardada')
        /*NO NECESITO VACIAR LOS INPUTS AL EDITAR!!!!! PENSALO BIEN
        setEditedNoteText('')
        setEditedNoteTitle('') */
        //alert('Nota editada')
    }

    return(
        <>
            <h1>id InputNote:{id}</h1>
            { id === 0 ? (
                <div>
                    
                    <input type="text"
                    className="inputTitle"
                    placeholder="Title"
                    value={noteTitle}
                    onChange={(e)=>setNoteTitle(e.target.value)}/>

                    <textarea value={noteText}
                    placeholder="Write a note..."
                    className="inputText"
                    onChange={(e)=>setNoteText(e.target.value)}/>
                    <Button onClick={handleAddNewNote} content="Agregar Nota"/>
                </div>
            ) : (
                <div>
                    <input
                    type="text"
                    className="inputTitle"
                    value={editedNoteTitle}
                    onChange={(e)=>setEditedNoteTitle(e.target.value)}/>

                    <textarea
                    value={editedNoteText}
                    className="inputText"
                    onChange={(e)=>setEditedNoteText(e.target.value)}/>
                    <Button onClick={handleEditNote} content="Guardar Nota"/>
                </div>
            )}
        </>
    )
}

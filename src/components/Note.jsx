import { useContext, useState } from "react"
import { NotesContext } from "../context/NotesContext"
import { Button } from "./Button"

export const Note = ({ note }) => {
    const [ isHovered, setIsHovered ] = useState(false);
    const { setSelectedNote, selectedNote, deleteNote, handleEditNote, handleSelectNote } = useContext(NotesContext) 

    const onEditNote = () => {
        handleEditNote(note.id)
        setSelectedNote(null)
    }

    const onSelectNote = () => {
        handleSelectNote(note)
    }

    const handleDeleteNote = () => {
        deleteNote(note.id)
        if(selectedNote != null && selectedNote.id === note.id){
            handleSelectNote(null)  
        }   
        alert('Nota Eliminada')
    }
    
    return(
        <div className="d-flex p-1 m-1 justify-content-between border border-black" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            <p onClick={onSelectNote} className="mt-2">
                {note.title.length > 15 ?
                note.title.slice(0,15)+"..." :
                note.title}
            </p>
            <div>
            {isHovered && <Button onClick={onEditNote} content='✏️' />}
            {isHovered && <Button onClick={handleDeleteNote} content='❌'/>}
            </div>
        </div>
    )
}
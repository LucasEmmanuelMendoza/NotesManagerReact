import { Note } from "./note"

export const NotesContainer = ({notes}) => {
    return(
        <div className="notesContainer">
            {notes.length != 0 ? 
            notes.map((note) => 
            <Note key={note.id} note={note}/>) 
            : <>Sin notas</>}
        </div>
    )
} 
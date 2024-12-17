import { useContext, useEffect, useState } from "react"
import { InputNote } from "./InputNote"
import { NotesContainer } from "./notesContainer"
import { NotesContext } from "../context/NotesContext"
import { Button } from './Button'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NoteContent } from "./NoteContent"

export const MainView = () => {
    const { notes } = useContext(NotesContext)
    const { handleAddNote, idEditNote, selectedNote } = useContext(NotesContext)

    return(
    <Container>    
        <h1>Notes Manager</h1>
        <Row>
            <Col>
            { selectedNote != null ? (
                <>
                    <NoteContent note={selectedNote}/>
                </>
                ) : (
                    <InputNote id={idEditNote}/>
                ) 
            }
            </Col>
            <Col>
                <Button content='+' onClick={()=>handleAddNote()}/>
                <NotesContainer notes={notes}/>
            </Col> 
        </Row>
    </Container>)
     
}
                    

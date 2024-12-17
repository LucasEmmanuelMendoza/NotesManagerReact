import { Container } from "react-bootstrap"

export const NoteContent = ({note}) => {
    return(
        <Container>
            <h1>{note.title}</h1>
            <p>{note.text}</p>
        </Container>
    )
}
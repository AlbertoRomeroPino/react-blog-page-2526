import { useState, type ChangeEvent, type FormEvent } from "react";
import "./CommentsForm.css";

interface CommentsFromProps {
    anadirComentario: (nombre: string, texto: string) => void
}

function CommentsForm({anadirComentario} : CommentsFromProps) {
    const [nombre, setNombre] = useState("");
    const [comentario, setComentario] = useState("");
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (nombre.trim().length > 0 && comentario.trim().length > 0) {
            anadirComentario(nombre.trim(), comentario.trim());
            setNombre("");
            setComentario("");
        }
        
    }
    function handleTextoChange(e: ChangeEvent<HTMLInputElement > ) {
        setNombre(e.currentTarget.value);
    }

    function handleComentarioChange(e: ChangeEvent<HTMLTextAreaElement > ) {
        setComentario(e.currentTarget.value);
    }

    return <><h4>Déjanos un comentario</h4><form onSubmit={handleSubmit} className="comment-form">
        <input type="text" placeholder="Nombre" onChange={handleTextoChange} required value={nombre}></input>
        <textarea value={comentario} placeholder="Escribe tu comentario" onChange={handleComentarioChange}/>
        <button type="submit">Añadir comentario</button>
    </form></>

}

export default CommentsForm;
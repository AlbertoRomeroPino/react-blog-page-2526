import { useState } from "react";
import type { Comentario } from "../types/comentario";
import "./Comments.css"
import CommentsForm from "./CommentsForm";

interface CommentsProps {
    listaComentarios : Comentario[]
    permitirComentarios?: boolean
}

function Comments({listaComentarios, permitirComentarios=true} : CommentsProps) {
    const [comentarios, setComentarios] = useState(listaComentarios)

    function anadirComentario(nombre :string, texto: string) {
        const nuevoComentario : Comentario = {id: comentarios.length+1, nombreUsuario: nombre, texto:texto};
        setComentarios([...comentarios, nuevoComentario]);
    }

    return <section className="comments">
    <h3>Comentarios</h3>
    <ul>
        {comentarios.map((comentario, indice) => 
        <li key={indice}><strong>{comentario.nombreUsuario}:</strong>{comentario.texto}</li>)}
    </ul>
    {permitirComentarios && <CommentsForm anadirComentario={anadirComentario} />}
    </section>
}

export default Comments;
import type { Entrada } from "../types/entrada";

export const entradas :Entrada[] = [
  {
    id: 1,
    titular: "React: cómo crear tus primeros componentes",
    imagen: "https://picsum.photos/600/300?random=1",
    cuerpo: `
      En este artículo aprenderás a crear tus primeros componentes en React paso a paso.
      Veremos cómo dividir la interfaz en pequeñas piezas reutilizables y cómo pasar información entre ellas mediante props.
      Este es el primer paso para construir aplicaciones modernas y escalables.
    `,
    autor: {
      nombre: "Laura Pérez",
      foto: "https://i.pravatar.cc/100?img=12"
    },
    categoria: "React",
    etiquetas: ["React", "Frontend", "JavaScript"],
    comentarios: [
      { id: 1, nombreUsuario: "Carlos", texto: "¡Muy buen artículo!" },
      { id: 2, nombreUsuario: "Ana", texto: "Gracias por la explicación." }
    ],
    idsEntradasRelacionadas: [2, 4]
  },
  {
    id: 2,
    titular: "Cómo funciona el Virtual DOM",
    imagen: "https://picsum.photos/600/300?random=2",
    cuerpo: `
      El Virtual DOM es una de las claves de rendimiento de React.
      Permite comparar versiones del árbol de componentes para actualizar solo lo necesario.
      En este artículo te explicamos cómo funciona y por qué hace que React sea tan eficiente.
    `,
    autor: {
      nombre: "Laura Pérez",
      foto: "https://i.pravatar.cc/100?img=12"
    },
    categoria: "React",
    etiquetas: ["React", "Renderizado", "DOM"],
    comentarios: [{ id: 1, nombreUsuario: "Mario", texto: "No lo entendía hasta ahora, gracias." }],
    idsEntradasRelacionadas: [1, 3]
  },
  {
    id: 3,
    titular: "Diferencias entre React y Angular",
    imagen: "https://picsum.photos/600/300?random=3",
    cuerpo: `
      React y Angular son dos de los frameworks más populares del desarrollo frontend.
      Aunque comparten objetivos similares, sus filosofías son distintas.
      React se centra en la vista y deja libertad al desarrollador, mientras que Angular ofrece una solución completa.
    `,
    autor: {
      nombre: "Miguel Gómez",
      foto: "https://i.pravatar.cc/100?img=14"
    },
    categoria: "Comparativas",
    etiquetas: ["React", "Angular", "Frameworks"],
    comentarios: [],
    idsEntradasRelacionadas: [2, 5]
  },
  {
    id: 4,
    titular: "Introducción a JSX",
    imagen: "https://picsum.photos/600/300?random=4",
    cuerpo: `
      JSX es una extensión de JavaScript que permite escribir HTML dentro del código.
      Aunque al principio puede parecer extraño, su poder radica en la simplicidad y la legibilidad.
      Es la forma más común de definir la interfaz en React.
    `,
    autor: {
      nombre: "Sofía Hernández",
      foto: "https://i.pravatar.cc/100?img=18"
    },
    categoria: "React",
    etiquetas: ["JSX", "React", "Sintaxis"],
    comentarios: [
      { id: 1, nombreUsuario: "Pedro", texto: "Muy claro el ejemplo." },
      { id: 2, nombreUsuario: "Lucía", texto: "Ahora entiendo mejor JSX." }
    ],
    idsEntradasRelacionadas: [1]
  },
  {
    id: 5,
    titular: "Comparativa entre Vue y React",
    imagen: "https://picsum.photos/600/300?random=5",
    cuerpo: `
      Vue y React son dos librerías muy usadas para el desarrollo de interfaces web.
      Ambas son rápidas, reactivas y cuentan con una gran comunidad.
      Sin embargo, difieren en su curva de aprendizaje y ecosistema.
    `,
    autor: {
      nombre: "Miguel Gómez",
      foto: "https://i.pravatar.cc/100?img=14"
    },
    categoria: "Comparativas",
    etiquetas: ["Vue", "React", "Frameworks"],
    comentarios: [],
    idsEntradasRelacionadas: [3]
  },
  {
    id: 6,
    titular: "Buenas prácticas al escribir componentes",
    imagen: "https://picsum.photos/600/300?random=6",
    cuerpo: `
      Escribir componentes limpios y reutilizables es clave en cualquier proyecto React.
      Aprende a mantener tu código ordenado y legible, con convenciones simples y ejemplos prácticos.
    `,
    autor: {
      nombre: "Laura Pérez",
      foto: "https://i.pravatar.cc/100?img=12"
    },
    categoria: "React",
    etiquetas: ["Buenas prácticas", "React", "Componentes"],
    comentarios: [{ id: 1, nombreUsuario: "Andrea", texto: "Gracias por los consejos." }],
    idsEntradasRelacionadas: [1, 4]
  }
];

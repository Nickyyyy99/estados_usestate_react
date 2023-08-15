import React from 'react'

const date = [
  {
    "id": 12,
    "titulo": "Spiderman",
    "texto": "Joven héroe con poderes arácnidos que combate el crimen balanceándose por Nueva York.",
    "user_id": 7,
    "usuario": "stan_lee"
  },
  {
    "id": 14,
    "titulo": "X-MEN",
    "texto": "Equipo de mutantes con habilidades únicas que luchan por la coexistencia pacífica entre humanos y mutantes.",
    "user_id": 7,
    "usuario": "stan_lee"
  },
  {
    "id": 16,
    "titulo": "Capitán América",
    "texto": "Soldado mejorado con un escudo indestructible que lidera a los Vengadores en la defensa del mundo.",
    "user_id": 7,
    "usuario": "stan_lee"
  },
  {
    "id": 17,
    "titulo": "Thanos",
    "texto": "Titán obsesionado con el poder y las Gemas del Infinito, busca la aniquilación para equilibrar el universo.",
    "user_id": 7,
    "usuario": "stan_lee"
  },
  {
    "id": 18,
    "titulo": "Ant-Man",
    "texto": "Héroe capaz de encogerse y controlar insectos con un traje especial para combatir el mal.",
    "user_id": 7,
    "usuario": "stan_lee"
  },
];

function App () {
 
  const handleLeerClick = (id, titulo, texto) => {
    alert(`ID ${id}, ${titulo}, ${texto}`)
  }
  const handleModificarClick = (id, titulo) => {
    alert(`ID ${id}, ${titulo}`)
  }

  return (
    <>
    <h2>Lista de Superhéroes</h2>
    {date.map(post => (
      <div key={post.id}>
        <h2>{post.titulo}</h2>
        <button onClick={() => handleLeerClick (post.id, post.titulo, post.texto)}>Leer</button>
        <button onClick={() => handleModificarClick (post.id, post.titulo)}>Modificar</button>
      </div>
    ))}

    </>
  );
}
export default App;







import { act, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
function Actors() {
  const [actors, setActors] = useState([]);
  
  useEffect(()=>{
    fetch("http://localhost:3000/actors")
    .then((res)=> res.json())
    .then((data)=> setActors(data) )
  })
  const actorInfo = actors.map((actor)=>{
    return <article>
      <h2>{actor.name}</h2>
      <ul>
        <li>{actor.movies[0]}</li>
        <li>{actor.movies[1]}</li>
        <li>{actor.movies[2]}</li>
      </ul>
    </article>
  },[])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {/* Actor info here! */}
        {actorInfo}
      </main>
    </>
  );
};

export default Actors;

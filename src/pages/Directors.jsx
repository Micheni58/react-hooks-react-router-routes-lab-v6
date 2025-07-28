import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
function Directors() {
  const [directors, setDirectors] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/directors")
    .then((res)=> res.json())
    .then((data)=> setDirectors(data))
  },[])
  const directorsDetails = directors.map((director)=>{
    return <article>
      <h2>{director.name}</h2>
      <ul>
        <li>{director.movies[0]}</li>
        <li>{director.movies[1]}</li>
        <li>{director.movies[2]}</li>
      </ul>
    </article>
  })
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        {directorsDetails}
      </main>
    </>
  );
};

export default Directors;

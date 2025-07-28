import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
function Home() {
  const [movie, setMovie] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/movies")
    .then((res) => res.json())
    .then((data)=> setMovie(data))
  },[])
  const movieList = movie.map((movie)=>{
    return <MovieCard key={movie.id} title={movie.title} id={movie.id} time={movie.time}/>
  })
  return (
    <>
      <header>
        {/* What component should go here? */}
      <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
      {movieList}
      </main>
    </>
  );
};

export default Home;

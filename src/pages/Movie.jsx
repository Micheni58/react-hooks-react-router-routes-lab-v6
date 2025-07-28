import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movieDetail, setMovieDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Fetched movie data:", data); 
        setMovieDetail(data);
      })
      .catch((err) => console.error("Error fetching movie:", err));
  }, [id]);

  if (!movieDetail) return <p>Loading movie details...</p>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Your movie</h1>
        <article>
          <h1>{movieDetail.title}</h1>
          <p>{movieDetail.time}</p>
          <div>
            {movieDetail.genres?.map((genre, index) => (
              <span key={index} style={{ marginRight: "10px" }}>
                {genre}
              </span>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}

export default Movie;

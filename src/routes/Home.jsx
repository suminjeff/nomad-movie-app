import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "../styles/Home.module.css";
import Loading from "../components/Loading";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const url = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`;

  const getMovies = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1 className={styles.title}>Movie App</h1>
          <div className={styles.container}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                year={movie.year}
                rating={movie.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
